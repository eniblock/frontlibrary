import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoCardComponent} from './info-card.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [InfoCardComponent],
    exports: [
        InfoCardComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        RouterModule
    ]
})
export class InfoCardModule {
}
