import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleComponent} from './title.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    declarations: [TitleComponent],
    exports: [TitleComponent],
    imports: [
        CommonModule,
        MatIconModule,
    ]
})
export class TitleModule {
}
