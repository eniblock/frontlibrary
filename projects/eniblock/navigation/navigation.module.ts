import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NavigationComponent} from './navigation.component';
import {NavigationItemComponent} from './item/item.component';
import {NavigationGroupComponent} from './group/group.component';
import {NavigationCollapsableComponent} from './collapsable/collapsable.component';

@NgModule({
    declarations: [
        NavigationComponent,
        NavigationItemComponent,
        NavigationGroupComponent,
        NavigationCollapsableComponent
    ],
    exports: [
        NavigationComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        MatIconModule,
        RouterModule,
        BrowserAnimationsModule
    ]
})
export class NavigationModule {
}
