import {Observable} from 'rxjs';
import {SortDirection} from '@angular/material/sort';

export interface DataTableFilter {
    column: string;
    type: DataTableFilterType;
    displayName?: string;
    values?: any[] | Observable<any[]>;
    displayValue?: (item: any) => string;
}

export enum DataTableFilterType {
    STRING = 'STRING',
    SELECT = 'SELECT',
    DATEPICKER = 'DATEPICKER',
    DATERANGEPICKER = 'DATERANGEPICKER',
    TOGGLE = 'TOGGLE'
}

export interface DataTableLoadEvent {
    filters: any;
    sort: string;
    sortDirection: SortDirection;
    pageIndex: number;
    pageSize: number;
}
