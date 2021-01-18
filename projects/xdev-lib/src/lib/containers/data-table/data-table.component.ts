import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import moment from 'moment';
import {DataTableColumn, DataTableFilter} from './data-table.model';
import {DataSource, isDataSource} from '@angular/cdk/collections';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {

    @Input() pageSize = 10;
    @Input() pageSizeOptions = [10, 20, 50];
    @Input() length = null;

    @Output() filterChange = new EventEmitter<string>();
    @Output() sortChange = new EventEmitter<Sort>();
    @Output() pageChange = new EventEmitter<PageEvent>();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    private _data: MatTableDataSource<any> | DataSource<any>;

    @Input() set data(values: MatTableDataSource<any> | DataSource<any>) {
        if (values) {
            this._data = values;
        }
    }

    get data(): MatTableDataSource<any> | DataSource<any> {
        return this._data;
    }

    private _columns: DataTableColumn[];

    @Input() set columns(values: DataTableColumn[]) {
        if (values) {
            this._columns = values;
            this.columnsName = values.map(val => val.name);
        }
    }

    get columns(): DataTableColumn[] {
        return this._columns;
    }

    private _filters: DataTableFilter[];

    @Input() set filters(filters: DataTableFilter[]) {
        if (filters) {
            const formArray = this.filtersForm.get('filters') as FormArray;
            for (const filter of filters) {
                formArray.push(this._formBuilder.group({
                    filter: ''
                }));
            }
            this._filters = filters;
        }
    }

    get filters(): DataTableFilter[] {
        return this._filters;
    }

    filtersForm: FormGroup;
    columnsName: string[];

    constructor(private _formBuilder: FormBuilder) {
        this.filtersForm = this._formBuilder.group({
            filters: this._formBuilder.array([])
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
}
