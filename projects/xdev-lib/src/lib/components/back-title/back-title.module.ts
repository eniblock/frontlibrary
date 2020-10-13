import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackTitleComponent} from './back-title.component';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [BackTitleComponent],
  exports: [BackTitleComponent],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        MatTooltipModule
    ]
})
export class BackTitleModule { }
