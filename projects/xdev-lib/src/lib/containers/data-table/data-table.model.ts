export interface DataTableColumn {
    name: string;
    displayName?: string;
    icon?: string;
    sort?: boolean;
    displayValue?: (row: any) => string;
    customClass?: (row: any) => string;
    type?: DataTableColumnType;
    callback?: (row: any) => void;
    component?: any;
}

export function isDataTableColumn(value: any): value is DataTableColumn {
    return !!(value as DataTableColumn).name;
}

export enum DataTableColumnType {
    VALUE = 'VALUE',
    BUTTON = 'BUTTON',
    CUSTOM = 'CUSTOM'
}

export interface DataTableFilter {
    column: string;
    type: DataTableFilterType;
    displayName?: string;
    values?: any[];
}

export enum DataTableFilterType {
    STRING = 'STRING',
    SELECT = 'SELECT',
    DATEPICKER = 'DATEPICKER'
}
