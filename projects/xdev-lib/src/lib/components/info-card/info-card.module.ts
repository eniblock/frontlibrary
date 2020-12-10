import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoCardComponent} from './info-card.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [InfoCardComponent],
    exports: [
        InfoCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule
    ]
})
export class InfoCardModule {
}
