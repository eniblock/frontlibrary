import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';

import {FileImportComponent} from './file-import.component';
import {DragDropDirective} from './drag-drop.directive';

@NgModule({
    declarations: [
        FileImportComponent,
        DragDropDirective
    ],
    imports: [
        CommonModule,
        FlexModule,
        MatIconModule
    ],
    providers: [
        DragDropDirective
    ],
    exports: [
        FileImportComponent,
        DragDropDirective
    ]
})
export class FileImportModule {
}
