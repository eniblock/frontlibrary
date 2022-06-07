import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {BackTitleComponent} from './back-title.component';


@NgModule({
    declarations: [
        BackTitleComponent
    ],
    imports: [
        CommonModule,
        FlexModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [BackTitleComponent]
})
export class BackTitleModule {
}
