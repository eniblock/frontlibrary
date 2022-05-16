import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ToolbarComponent} from './toolbar/toolbar.component';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        LayoutComponent,
        SidebarComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
    ]
})
export class LayoutModule {
}
