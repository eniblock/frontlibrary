import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList,
    Self,
    ViewChild
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatColumnDef, MatTable} from '@angular/material/table';
import {merge, startWith, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {DataTableFilter, DataTableFilterType, DataTableLoadEvent} from './data-table.model';

@Component({
    selector: 'eni-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, AfterContentInit {

    _data: any[];
    @Input() set data(data: any[]) {
        this._data = data;
        setTimeout(() => {
            this.loading = false;
        });
    }

    @Input() columns: string[];
    @Input() pageSize = 10;
    @Input() pageSizeOptions = [10, 20, 50];
    @Input() length = 0;

    @Output() load = new EventEmitter<DataTableLoadEvent>();
    @Output() rowClicked = new EventEmitter<any>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatTable, {static: true}) table: MatTable<any>;
    @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;


    private _filters: DataTableFilter[];
    @Input() set filters(filters: DataTableFilter[]) {
        if (filters) {
            const formArray = this.filtersForm.get('filters') as FormArray;
            for (const filter of filters) {
                switch (filter.type) {
                    case DataTableFilterType.DATERANGEPICKER:
                        formArray.push(this._formBuilder.group({
                            startDate: '',
                            endDate: ''
                        }));
                        break;
                    default:
                        formArray.push(this._formBuilder.group({
                            filterValue: ''
                        }));
                }
            }
            this._filters = filters;
        }
    }

    get filters(): DataTableFilter[] {
        return this._filters;
    }

    DataTableFilterType = DataTableFilterType;

    loading: boolean = true;

    filtersForm: FormGroup;
    filtersData = {
        data: null,
        filterChange: new EventEmitter<any>()
    };
    $dateRangeEvent = new Subject<void>();

    constructor(
        private _formBuilder: FormBuilder,
        @Self() private sort: MatSort
    ) {
        this.filtersForm = this._formBuilder.group({
            filters: this._formBuilder.array([])
        });

        // Prevent double event from daterange picker
        this.$dateRangeEvent.pipe(
            debounceTime(100)
        ).subscribe(() => {
            this.applyFilter();
        });
    }

    ngAfterViewInit(): void {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.filtersData.filterChange, this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}))
            .subscribe(() => {
                this.loading = true;
                this.load.emit({
                    filters: this.filtersData.data,
                    sort: this.sort.active,
                    sortDirection: this.sort.direction,
                    pageIndex: this.paginator.pageIndex,
                    pageSize: this.paginator.pageSize
                });
            });
    }

    ngAfterContentInit(): void {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    }

    getFilters(): FormArray {
        return this.filtersForm.get('filters') as FormArray;
    }

    applyFilter(): void {
        const filters = this.getFilters().controls;
        const filtersObject = {};
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].value.filterValue || typeof filters[i].value.filterValue === 'boolean') {
                filtersObject[this.filters[i].column] = filters[i].value.filterValue;
            } else if (filters[i].value.startDate && filters[i].value.endDate) {
                filtersObject[this.filters[i].column] = {
                    startDate: filters[i].value.startDate,
                    endDate: filters[i].value.endDate
                };
            }
        }
        this.filtersData.data = filtersObject;
        this.filtersData.filterChange.emit(filtersObject);
    }
}
