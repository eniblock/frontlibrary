import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CellDefault, CustomCellComponent} from './custom-cell.component';


@NgModule({
    declarations: [CellDefault, CustomCellComponent],
    exports: [CellDefault, CustomCellComponent],
    imports: [
        CommonModule
    ]
})
export class CustomCellModule {
}
