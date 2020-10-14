import { __decorate } from 'tslib';
import { Input, Component, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

let CardValueComponent = class CardValueComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], CardValueComponent.prototype, "value", void 0);
__decorate([
    Input()
], CardValueComponent.prototype, "cardTitle", void 0);
__decorate([
    Input()
], CardValueComponent.prototype, "unit", void 0);
__decorate([
    Input()
], CardValueComponent.prototype, "description", void 0);
__decorate([
    Input()
], CardValueComponent.prototype, "refresh", void 0);
CardValueComponent = __decorate([
    Component({
        selector: 'app-card-value',
        template: "<div id=\"card-value\">\n    <div class=\"balance-container\">\n        <button mat-icon-button class=\"refresh\" (click)=\"refresh()\" *ngIf=\"refresh\">\n            <mat-icon>\n                refresh\n            </mat-icon>\n        </button>\n            <mat-card class=\"accent\">\n                <h1 class=\"mr-12 ml-12\">{{cardTitle}}</h1>\n                <div class=\"value mr-12 ml-12\">\n                    <h1 class=\"m-0\">{{value !== null ? (value | number) : '-'}}\n                        <span *ngIf=\"description\" class=\"secondary-text description\">\n                            {{description}}\n                        </span>\n                    </h1>\n                    <div class=\"unit\">{{unit}}</div>\n                </div>\n            </mat-card>\n    </div>\n</div>\n",
        styles: ["#card-value{min-width:250px}#card-value .balance-container{position:relative}#card-value .balance-container .refresh{z-index:2;position:absolute;top:0;right:0}#card-value .balance-container .refresh .mat-icon{color:#fff;opacity:.7}#card-value .mat-card{position:relative}#card-value .mat-card .value h1{font-weight:700;font-size:36px}#card-value .mat-card .value h1 .description{font-size:24px}#card-value .mat-card .value .unit{position:absolute;top:45px;right:30px;font-size:55px;font-weight:800;color:#fff;opacity:.7}"]
    })
], CardValueComponent);

let CardValueModule = class CardValueModule {
};
CardValueModule = __decorate([
    NgModule({
        declarations: [CardValueComponent],
        exports: [CardValueComponent],
        imports: [
            CommonModule,
            MatCardModule,
            MatIconModule,
            MatButtonModule
        ]
    })
], CardValueModule);

let BackTitleComponent = class BackTitleComponent {
    constructor(_location) {
        this._location = _location;
    }
    historyBack() {
        this._location.back();
    }
};
BackTitleComponent.ctorParameters = () => [
    { type: Location }
];
__decorate([
    Input()
], BackTitleComponent.prototype, "titleSection", void 0);
__decorate([
    Input()
], BackTitleComponent.prototype, "description", void 0);
__decorate([
    Input()
], BackTitleComponent.prototype, "bckDescription", void 0);
__decorate([
    Input()
], BackTitleComponent.prototype, "pendingValue", void 0);
__decorate([
    Input()
], BackTitleComponent.prototype, "link", void 0);
BackTitleComponent = __decorate([
    Component({
        selector: 'app-back-title',
        template: "<div id=\"back-title\">\n    <button mat-icon-button class=\"mr-0 mr-sm-16\">\n        <mat-icon [routerLink]=\"link\" *ngIf=\"link\">\n            arrow_back\n        </mat-icon>\n        <mat-icon (click)=\"historyBack()\" *ngIf=\"!link\">\n            arrow_back\n        </mat-icon>\n    </button>\n    <div>\n        <div class=\"h2 content\">\n            {{description}}\n            <span\n                    *ngIf=\"bckDescription\"\n                    [ngClass]=\"{'secondary-text': pendingValue, 'pending': pendingValue}\"\n                    [matTooltip]=\"pendingValue && 'Pending ' + bckDescription\">\n                - {{bckDescription}}\n            </span>\n        </div>\n        <div class=\"subtitle secondary-text\">\n            {{titleSection}}\n        </div>\n    </div>\n    <ng-content></ng-content>\n</div>\n",
        styles: ["#back-title{display:flex;align-items:center}#back-title .content{white-space:nowrap}#back-title .content .pending{cursor:pointer}#back-title .subtitle{margin:6px 0 0;white-space:nowrap}"]
    })
], BackTitleComponent);

let BackTitleModule = class BackTitleModule {
};
BackTitleModule = __decorate([
    NgModule({
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
], BackTitleModule);

let TitleComponent = class TitleComponent {
    constructor() {
        this.svgIcon = false;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], TitleComponent.prototype, "icon", void 0);
__decorate([
    Input()
], TitleComponent.prototype, "title", void 0);
__decorate([
    Input()
], TitleComponent.prototype, "svgIcon", void 0);
TitleComponent = __decorate([
    Component({
        selector: 'app-title',
        template: "<div class=\"title\">\n    <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon\" *ngIf=\"!svgIcon\">\n            {{icon}}\n        </mat-icon>\n        <mat-icon class=\"logo-icon\" *ngIf=\"svgIcon\" [svgIcon]=\"icon\">\n        </mat-icon>\n        <h1 class=\"logo-text\">\n            <ng-content></ng-content>\n        </h1>\n    </div>\n</div>\n",
        styles: [".title .logo{display:flex;flex-direction:row;align-items:center}.title .logo .logo-icon{margin-right:16px}"]
    })
], TitleComponent);

let TitleModule = class TitleModule {
};
TitleModule = __decorate([
    NgModule({
        declarations: [TitleComponent],
        exports: [TitleComponent],
        imports: [
            CommonModule,
            MatIconModule,
        ]
    })
], TitleModule);

let RssItemComponent = class RssItemComponent {
    constructor() {
        this.extractContent = (s) => {
            const span = document.createElement('span');
            span.innerHTML = s;
            return span.textContent || span.innerText;
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], RssItemComponent.prototype, "rssItem", void 0);
RssItemComponent = __decorate([
    Component({
        selector: 'app-rss-item',
        template: "<a [href]=\"rssItem.link[0]\" target=\"_blank\" *ngIf=\"rssItem\">\n    <mat-card id=\"rss-item\">\n        <div class=\"content\">\n            <div class=\"img mr-12\">\n                <img *ngIf=\"rssItem['itunes:image'] && rssItem['itunes:image'].length > 0\" [src]=\"rssItem['itunes:image'][0].$.href\">\n            </div>\n            <div class=\"info\">\n                <h2 class=\"pt-0 mt-0\">{{rssItem.title[0]}}</h2>\n                <div class=\"info-item\">\n                    <mat-icon class=\"secondary-text mr-12\">alarm</mat-icon>\n                    <div>{{rssItem.pubDate[0] | date: 'dd/MM/yyyy'}}</div>\n                </div>\n                <div [innerHTML]=\"extractContent(rssItem.description[0])\" class=\"mt-12\"></div>\n            </div>\n        </div>\n    </mat-card>\n</a>\n\n",
        styles: ["#rss-item .content{display:flex;flex-direction:row;height:155px;overflow:hidden}#rss-item .content .img,#rss-item .content .img img{max-width:155px;width:100%;height:100%}#rss-item .content .info .info-item{display:flex;align-items:flex-end}"]
    })
], RssItemComponent);

let RssItemModule = class RssItemModule {
};
RssItemModule = __decorate([
    NgModule({
        declarations: [RssItemComponent],
        exports: [RssItemComponent],
        imports: [
            CommonModule,
            MatCardModule,
            MatIconModule
        ]
    })
], RssItemModule);

let InfoCardComponent = class InfoCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], InfoCardComponent.prototype, "data", void 0);
__decorate([
    Input()
], InfoCardComponent.prototype, "title", void 0);
InfoCardComponent = __decorate([
    Component({
        selector: 'app-info-card',
        template: "<div id=\"info-card\">\n    <h5 *ngIf=\"title\" class=\"mt-0\">{{title | uppercase}}</h5>\n    <mat-card class=\"mb-12 pb-28\">\n        <ng-container *ngFor=\"let item of data\">\n            <div class=\"row mt-16 mr-12 ml-12\" >\n                <div class=\"secondary-text\">{{item.label}}</div>\n                <div *ngIf=\"item.type === 'date'\" class=\"value\">{{item.value ? (item.value | date : 'dd/MM/yyyy') : '-'}}</div>\n                <div *ngIf=\"item.type === 'number'\" class=\"value\">{{item.value ? (item.value | number:'':'fr-FR') : '-'}}</div>\n                <a *ngIf=\"item.type === 'link'\" class=\"value\" [routerLink]=\"item.link\">{{item.value ? item.value : '-'}}</a>\n                <div *ngIf=\"item.type === 'money'\" class=\"value\">{{item.value ? (item.value | currency: 'EUR': 'symbol') : '-'}}</div>\n                <div *ngIf=\"!item.type\" class=\"value\" >{{item.value ? (item.value) : '-'}}</div>\n            </div>\n            <hr class=\"separator mr-8 ml-8 mt-16\" *ngIf=\"item !== data[data.length - 1]\">\n        </ng-container>\n        <ng-content></ng-content>\n    </mat-card>\n</div>\n",
        styles: ["#info-card h5{font-weight:600}#info-card .row{display:flex;justify-content:space-between}#info-card .row .value{font-weight:500}#info-card hr{opacity:.5}"]
    })
], InfoCardComponent);

let InfoCardModule = class InfoCardModule {
};
InfoCardModule = __decorate([
    NgModule({
        declarations: [InfoCardComponent],
        exports: [
            InfoCardComponent
        ],
        imports: [
            CommonModule,
            MatCardModule,
            RouterModule
        ]
    })
], InfoCardModule);

let InfoComponent = class InfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], InfoComponent.prototype, "data", void 0);
InfoComponent = __decorate([
    Component({
        selector: 'app-info',
        template: "<div id=\"info\">\n    <ng-container *ngFor=\"let item of data\">\n        <div class=\"row mt-16\" >\n            <div class=\"secondary-text\">{{item.label}}</div>\n            <div *ngIf=\"item.type === 'date'\" class=\"value\">{{item.value ? (item.value | date : 'dd/MM/yyyy') : '-'}}</div>\n            <div *ngIf=\"item.type === 'number'\" class=\"value\">{{item.value ? (item.value | number:'':'fr-FR') : '-'}}</div>\n            <div *ngIf=\"item.type === 'money'\" class=\"value\">{{item.value ? (item.value | currency: 'EUR': 'symbol') : '-'}}</div>\n            <div *ngIf=\"!item.type\" class=\"value\">{{item.value ? item.value : '-'}}</div>\n        </div>\n        <hr class=\"separator\" *ngIf=\"item !== data[data.length - 1]\">\n    </ng-container>\n</div>\n",
        styles: ["#info .row{display:flex;justify-content:space-between}#info hr{opacity:.5}"]
    })
], InfoComponent);

let InfoModule = class InfoModule {
};
InfoModule = __decorate([
    NgModule({
        declarations: [InfoComponent],
        exports: [
            InfoComponent
        ],
        imports: [
            CommonModule
        ]
    })
], InfoModule);

/*
 * Public API Surface of xdev-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BackTitleComponent, BackTitleModule, CardValueComponent, CardValueModule, InfoCardComponent, InfoCardModule, InfoComponent, InfoModule, RssItemComponent, RssItemModule, TitleComponent, TitleModule };
//# sourceMappingURL=xdev-lib.js.map
