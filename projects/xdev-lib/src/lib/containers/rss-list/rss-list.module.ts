import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RssListComponent} from './rss-list.component';
import {RssItemModule} from '../../components/rss-item/rss-item.module';



@NgModule({
  declarations: [RssListComponent],
  exports: [RssListComponent],
  imports: [
    CommonModule,
    RssItemModule,
  ]
})
export class RssListModule { }
