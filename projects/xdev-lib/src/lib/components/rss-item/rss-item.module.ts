import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssItemComponent } from './rss-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [RssItemComponent],
  exports: [RssItemComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class RssItemModule { }
