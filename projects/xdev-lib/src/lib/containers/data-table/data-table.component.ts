import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList,
    ViewChild
} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatColumnDef, MatTable, MatTableDataSource} from '@angular/material/table';
import moment from 'moment';
import {DataTableColumn, DataTableFilter, DataTableFilterType, isDataTableColumn} from './data-table.model';
import {DataSource, isDataSource} from '@angular/cdk/collections';
import {isObservable, Observable, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, AfterContentInit {

    @Input() pageSize = 10;
    @Input() pageSizeOptions = [10, 20, 50];
    @Input() length = null;
    @Input() loading: boolean;

    @Input() set columns(values: (DataTableColumn | string)[]) {
        if (values) {
            this.dataTableColumns = (values.filter(val => isDataTableColumn(val))) as DataTableColumn[];
            this.columnsName = (values.filter(val => typeof val === 'string')) as string[];
            this.columnsName = this.columnsName.concat(this.dataTableColumns.map(val => val.name));
        }
    }

    @Output() filterChange = new EventEmitter<string>();
    @Output() sortChange = new EventEmitter<Sort>();
    @Output() pageChange = new EventEmitter<PageEvent>();
    @Output() rowClicked = new EventEmitter();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatTable, {static: true}) table: MatTable<any>;
    @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;

    private _data: MatTableDataSource<any> | DataSource<any>;

    selectData = [];
    loadingData = [];

    @Input() set data(values: MatTableDataSource<any> | DataSource<any>) {
        if (values) {
            this._data = values;
        }
    }

    get data(): MatTableDataSource<any> | DataSource<any> {
        return this._data;
    }

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
                            filter: ''
                        }));
                }
            }
            this._filters = filters;
        }
    }

    get filters(): DataTableFilter[] {
        return this._filters;
    }

    filtersForm: FormGroup;
    dataTableColumns: DataTableColumn[];
    columnsName: string[];
    $dateRangeEvent = new Subject();

    constructor(private _formBuilder: FormBuilder) {
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
        if (this.data instanceof MatTableDataSource) {
            this.data.paginator = this.paginator;
            this.data.sort = this.sort;
        } else if (isDataSource(this.data)) {
            this.paginator.page.subscribe(event => this.pageChange.emit(event));
            this.sort.sortChange.subscribe(event => this.sortChange.emit(event));
        }
    }

    ngAfterContentInit(): void {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
    }

    getFilters(): FormArray {
        return this.filtersForm.get('filters') as FormArray;
    }

    applyFilter(): void {
        const filters = this.getFilters().controls;
        let values = '';
        for (let i = 0; i < filters.length; i++) {
            if (i > 0) {
                values += '$';
            }
            if (filters[i].value.filter) {
                if (typeof filters[i].value.filter === 'string') {
                    values += filters[i].value.filter;
                } else if (filters[i].value.filter instanceof moment) {
                    values += filters[i].value.filter.unix();
                }
            } else if (filters[i].value.startDate && filters[i].value.endDate) {
                values += (filters[i].value.startDate ? filters[i].value.startDate.unix() : '') + ',' +
                    (filters[i].value.endDate ? filters[i].value.endDate.unix() : '');
            } else {
                values += '';
            }
        }
        if (this.data instanceof MatTableDataSource) {
            this.data.filter = values;
        } else if (isDataSource(this.data)) {
            this.filterChange.emit(values);
        }
    }

    isObservable(input: any): boolean {
        return isObservable(input);
    }

    loadOptions(opened: boolean, observable: Observable<any>, index: number): any {
        if (opened) {
            this.loadingData[index] = true;
            observable.subscribe(data => {
                this.selectData[index] = data;
                this.loadingData[index] = false;
            }, () => {
                this.loadingData[index] = false;
            });
        }
    }
}
