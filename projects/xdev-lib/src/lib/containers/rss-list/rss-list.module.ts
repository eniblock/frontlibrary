import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RssListComponent} from './rss-list.component';
import {RssItemModule} from '../../components/rss-item/rss-item.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [RssListComponent],
    exports: [RssListComponent],
    imports: [
        CommonModule,
        RssItemModule,
        TranslateModule.forChild()
    ]
})
export class RssListModule {
}
