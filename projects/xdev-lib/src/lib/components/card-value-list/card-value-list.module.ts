import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardValueListComponent} from './card-value-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [CardValueListComponent],
  exports: [CardValueListComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule
    ]
})
export class CardValueListModule { }
