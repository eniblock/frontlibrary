import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardValueComponent} from './card-value.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [CardValueComponent],
  exports: [CardValueComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class CardValueModule { }
