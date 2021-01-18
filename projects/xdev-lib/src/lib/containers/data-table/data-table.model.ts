export interface DataTableColumn {
    name: string;
    displayName?: string;
    icon?: string;
    sort?: boolean;
    displayValue?: (row: any) => string;
    customClass?: (row: any) => string;
    type?: DataTableColumnType;
    callback?: (row: any) => void;
}

export enum DataTableColumnType {
    VALUE = 'VALUE',
    BUTTON = 'BUTTON'
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
