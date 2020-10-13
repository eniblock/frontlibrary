import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMoreComponent } from './show-more.component';



@NgModule({
  declarations: [ShowMoreComponent],
  exports: [ShowMoreComponent],
  imports: [
    CommonModule
  ]
})
export class ShowMoreModule { }
