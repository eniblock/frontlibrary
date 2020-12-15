import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoCardComponent} from './info-card.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';


@NgModule({
    declarations: [InfoCardComponent],
    exports: [
        InfoCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule
    ]
})
export class InfoCardModule {
}
