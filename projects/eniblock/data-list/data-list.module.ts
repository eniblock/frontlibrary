import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DataListComponent} from './data-list.component';
import {DataBlockComponent, EniData, EniDataKey, EniDataValue} from './data-block/data-block.component';

@NgModule({
    declarations: [
        DataListComponent,
        DataBlockComponent,
        EniData,
        EniDataKey,
        EniDataValue
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DataListComponent,
        DataBlockComponent,
        EniData,
        EniDataKey,
        EniDataValue
    ]
})
export class DataListModule {
}
