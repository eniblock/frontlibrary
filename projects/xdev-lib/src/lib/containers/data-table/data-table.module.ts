import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {DataTableComponent} from './data-table.component';
import {CustomCellModule} from '../../components/custom-cell/custom-cell.module';
import {SelectFilterComponent} from './select-filter/select-filter.component';


@NgModule({
    declarations: [
        DataTableComponent,
        SelectFilterComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatSortModule,
        CustomCellModule,
        MatProgressSpinnerModule,
        FormsModule
    ],
    exports: [DataTableComponent]
})
export class DataTableModule {
}
