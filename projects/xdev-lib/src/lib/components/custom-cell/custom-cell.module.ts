import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CellDefaultComponent, CustomCellComponent} from './custom-cell.component';


@NgModule({
    declarations: [CellDefaultComponent, CustomCellComponent],
    exports: [CellDefaultComponent, CustomCellComponent],
    imports: [
        CommonModule
    ]
})
export class CustomCellModule {
}
