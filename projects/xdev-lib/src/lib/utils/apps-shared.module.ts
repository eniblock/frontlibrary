import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleModule} from '../components/title/title.module';
import {BackTitleModule} from '../components/back-title/back-title.module';
import {InfoCardModule} from '../components/info-card/info-card.module';
import {InfoModule} from '../components/info/info.module';
import {CardValueModule} from '../components/card-value/card-value.module';
import {CardValueListModule} from '../components/card-value-list/card-value-list.module';
import {RssItemModule} from '../components/rss-item/rss-item.module';
import {RssListModule} from '../containers/rss-list/rss-list.module';
import {ConfirmDialogModule} from '../components/confirm-dialog/confirm-dialog.module';
import {TezosOperationModule} from '../containers/tezos-operation/tezos-operation.module';
import {ShowMoreModule} from '../components/show-more/show-more.module';
import {NoDataModule} from '../components/no-data/no-data.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [],
    exports: [
        TitleModule,
        BackTitleModule,
        InfoCardModule,
        InfoModule,
        CardValueModule,
        CardValueListModule,
        RssItemModule,
        RssListModule,
        ConfirmDialogModule,
        TezosOperationModule,
        ShowMoreModule,
        NoDataModule
    ],
    imports: [
        CommonModule,
        TitleModule,
        BackTitleModule,
        InfoCardModule,
        InfoModule,
        CardValueModule,
        MatCardModule,
        CardValueListModule,
        RssItemModule,
        RssListModule,
        ConfirmDialogModule,
        TezosOperationModule,
        ShowMoreModule,
        NoDataModule
    ]
})
export class AppsSharedModule { }
