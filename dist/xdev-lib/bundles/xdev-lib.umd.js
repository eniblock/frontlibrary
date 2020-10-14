(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material/card'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/router'), require('@angular/material/tooltip')) :
    typeof define === 'function' && define.amd ? define('xdev-lib', ['exports', '@angular/core', '@angular/common', '@angular/material/card', '@angular/material/icon', '@angular/material/button', '@angular/router', '@angular/material/tooltip'], factory) :
    (global = global || self, factory(global['xdev-lib'] = {}, global.ng.core, global.ng.common, global.ng.material.card, global.ng.material.icon, global.ng.material.button, global.ng.router, global.ng.material.tooltip));
}(this, (function (exports, core, common, card, icon, button, router, tooltip) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CardValueComponent = /** @class */ (function () {
        function CardValueComponent() {
        }
        CardValueComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], CardValueComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], CardValueComponent.prototype, "cardTitle", void 0);
        __decorate([
            core.Input()
        ], CardValueComponent.prototype, "unit", void 0);
        __decorate([
            core.Input()
        ], CardValueComponent.prototype, "description", void 0);
        __decorate([
            core.Input()
        ], CardValueComponent.prototype, "refresh", void 0);
        CardValueComponent = __decorate([
            core.Component({
                selector: 'app-card-value',
                template: "<div id=\"card-value\">\n    <div class=\"balance-container\">\n        <button mat-icon-button class=\"refresh\" (click)=\"refresh()\" *ngIf=\"refresh\">\n            <mat-icon>\n                refresh\n            </mat-icon>\n        </button>\n            <mat-card class=\"accent\">\n                <h1 class=\"mr-12 ml-12\">{{cardTitle}}</h1>\n                <div class=\"value mr-12 ml-12\">\n                    <h1 class=\"m-0\">{{value !== null ? (value | number) : '-'}}\n                        <span *ngIf=\"description\" class=\"secondary-text description\">\n                            {{description}}\n                        </span>\n                    </h1>\n                    <div class=\"unit\">{{unit}}</div>\n                </div>\n            </mat-card>\n    </div>\n</div>\n",
                styles: ["#card-value{min-width:250px}#card-value .balance-container{position:relative}#card-value .balance-container .refresh{z-index:2;position:absolute;top:0;right:0}#card-value .balance-container .refresh .mat-icon{color:#fff;opacity:.7}#card-value .mat-card{position:relative}#card-value .mat-card .value h1{font-weight:700;font-size:36px}#card-value .mat-card .value h1 .description{font-size:24px}#card-value .mat-card .value .unit{position:absolute;top:45px;right:30px;font-size:55px;font-weight:800;color:#fff;opacity:.7}"]
            })
        ], CardValueComponent);
        return CardValueComponent;
    }());

    var CardValueModule = /** @class */ (function () {
        function CardValueModule() {
        }
        CardValueModule = __decorate([
            core.NgModule({
                declarations: [CardValueComponent],
                exports: [CardValueComponent],
                imports: [
                    common.CommonModule,
                    card.MatCardModule,
                    icon.MatIconModule,
                    button.MatButtonModule
                ]
            })
        ], CardValueModule);
        return CardValueModule;
    }());

    var BackTitleComponent = /** @class */ (function () {
        function BackTitleComponent(_location) {
            this._location = _location;
        }
        BackTitleComponent.prototype.historyBack = function () {
            this._location.back();
        };
        BackTitleComponent.ctorParameters = function () { return [
            { type: common.Location }
        ]; };
        __decorate([
            core.Input()
        ], BackTitleComponent.prototype, "titleSection", void 0);
        __decorate([
            core.Input()
        ], BackTitleComponent.prototype, "description", void 0);
        __decorate([
            core.Input()
        ], BackTitleComponent.prototype, "bckDescription", void 0);
        __decorate([
            core.Input()
        ], BackTitleComponent.prototype, "pendingValue", void 0);
        __decorate([
            core.Input()
        ], BackTitleComponent.prototype, "link", void 0);
        BackTitleComponent = __decorate([
            core.Component({
                selector: 'app-back-title',
                template: "<div id=\"back-title\">\n    <button mat-icon-button class=\"mr-0 mr-sm-16\">\n        <mat-icon [routerLink]=\"link\" *ngIf=\"link\">\n            arrow_back\n        </mat-icon>\n        <mat-icon (click)=\"historyBack()\" *ngIf=\"!link\">\n            arrow_back\n        </mat-icon>\n    </button>\n    <div>\n        <div class=\"h2 content\">\n            {{description}}\n            <span\n                    *ngIf=\"bckDescription\"\n                    [ngClass]=\"{'secondary-text': pendingValue, 'pending': pendingValue}\"\n                    [matTooltip]=\"pendingValue && 'Pending ' + bckDescription\">\n                - {{bckDescription}}\n            </span>\n        </div>\n        <div class=\"subtitle secondary-text\">\n            {{titleSection}}\n        </div>\n    </div>\n    <ng-content></ng-content>\n</div>\n",
                styles: ["#back-title{display:flex;align-items:center}#back-title .content{white-space:nowrap}#back-title .content .pending{cursor:pointer}#back-title .subtitle{margin:6px 0 0;white-space:nowrap}"]
            })
        ], BackTitleComponent);
        return BackTitleComponent;
    }());

    var BackTitleModule = /** @class */ (function () {
        function BackTitleModule() {
        }
        BackTitleModule = __decorate([
            core.NgModule({
                declarations: [BackTitleComponent],
                exports: [BackTitleComponent],
                imports: [
                    common.CommonModule,
                    icon.MatIconModule,
                    router.RouterModule,
                    button.MatButtonModule,
                    tooltip.MatTooltipModule
                ]
            })
        ], BackTitleModule);
        return BackTitleModule;
    }());

    var TitleComponent = /** @class */ (function () {
        function TitleComponent() {
            this.svgIcon = false;
        }
        TitleComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], TitleComponent.prototype, "icon", void 0);
        __decorate([
            core.Input()
        ], TitleComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], TitleComponent.prototype, "svgIcon", void 0);
        TitleComponent = __decorate([
            core.Component({
                selector: 'app-title',
                template: "<div class=\"title\">\n    <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <mat-icon class=\"logo-icon\" *ngIf=\"!svgIcon\">\n            {{icon}}\n        </mat-icon>\n        <mat-icon class=\"logo-icon\" *ngIf=\"svgIcon\" [svgIcon]=\"icon\">\n        </mat-icon>\n        <h1 class=\"logo-text\">\n            <ng-content></ng-content>\n        </h1>\n    </div>\n</div>\n",
                styles: [".title .logo{display:flex;flex-direction:row;align-items:center}.title .logo .logo-icon{margin-right:16px}"]
            })
        ], TitleComponent);
        return TitleComponent;
    }());

    var TitleModule = /** @class */ (function () {
        function TitleModule() {
        }
        TitleModule = __decorate([
            core.NgModule({
                declarations: [TitleComponent],
                exports: [TitleComponent],
                imports: [
                    common.CommonModule,
                    icon.MatIconModule,
                ]
            })
        ], TitleModule);
        return TitleModule;
    }());

    var RssItemComponent = /** @class */ (function () {
        function RssItemComponent() {
            this.extractContent = function (s) {
                var span = document.createElement('span');
                span.innerHTML = s;
                return span.textContent || span.innerText;
            };
        }
        RssItemComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], RssItemComponent.prototype, "rssItem", void 0);
        RssItemComponent = __decorate([
            core.Component({
                selector: 'app-rss-item',
                template: "<a [href]=\"rssItem.link[0]\" target=\"_blank\" *ngIf=\"rssItem\">\n    <mat-card id=\"rss-item\">\n        <div class=\"content\">\n            <div class=\"img mr-12\">\n                <img *ngIf=\"rssItem['itunes:image'] && rssItem['itunes:image'].length > 0\" [src]=\"rssItem['itunes:image'][0].$.href\">\n            </div>\n            <div class=\"info\">\n                <h2 class=\"pt-0 mt-0\">{{rssItem.title[0]}}</h2>\n                <div class=\"info-item\">\n                    <mat-icon class=\"secondary-text mr-12\">alarm</mat-icon>\n                    <div>{{rssItem.pubDate[0] | date: 'dd/MM/yyyy'}}</div>\n                </div>\n                <div [innerHTML]=\"extractContent(rssItem.description[0])\" class=\"mt-12\"></div>\n            </div>\n        </div>\n    </mat-card>\n</a>\n\n",
                styles: ["#rss-item .content{display:flex;flex-direction:row;height:155px;overflow:hidden}#rss-item .content .img,#rss-item .content .img img{max-width:155px;width:100%;height:100%}#rss-item .content .info .info-item{display:flex;align-items:flex-end}"]
            })
        ], RssItemComponent);
        return RssItemComponent;
    }());

    var RssItemModule = /** @class */ (function () {
        function RssItemModule() {
        }
        RssItemModule = __decorate([
            core.NgModule({
                declarations: [RssItemComponent],
                exports: [RssItemComponent],
                imports: [
                    common.CommonModule,
                    card.MatCardModule,
                    icon.MatIconModule
                ]
            })
        ], RssItemModule);
        return RssItemModule;
    }());

    var InfoCardComponent = /** @class */ (function () {
        function InfoCardComponent() {
        }
        InfoCardComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], InfoCardComponent.prototype, "data", void 0);
        __decorate([
            core.Input()
        ], InfoCardComponent.prototype, "title", void 0);
        InfoCardComponent = __decorate([
            core.Component({
                selector: 'app-info-card',
                template: "<div id=\"info-card\">\n    <h5 *ngIf=\"title\" class=\"mt-0\">{{title | uppercase}}</h5>\n    <mat-card class=\"mb-12 pb-28\">\n        <ng-container *ngFor=\"let item of data\">\n            <div class=\"row mt-16 mr-12 ml-12\" >\n                <div class=\"secondary-text\">{{item.label}}</div>\n                <div *ngIf=\"item.type === 'date'\" class=\"value\">{{item.value ? (item.value | date : 'dd/MM/yyyy') : '-'}}</div>\n                <div *ngIf=\"item.type === 'number'\" class=\"value\">{{item.value ? (item.value | number:'':'fr-FR') : '-'}}</div>\n                <a *ngIf=\"item.type === 'link'\" class=\"value\" [routerLink]=\"item.link\">{{item.value ? item.value : '-'}}</a>\n                <div *ngIf=\"item.type === 'money'\" class=\"value\">{{item.value ? (item.value | currency: 'EUR': 'symbol') : '-'}}</div>\n                <div *ngIf=\"!item.type\" class=\"value\" >{{item.value ? (item.value) : '-'}}</div>\n            </div>\n            <hr class=\"separator mr-8 ml-8 mt-16\" *ngIf=\"item !== data[data.length - 1]\">\n        </ng-container>\n        <ng-content></ng-content>\n    </mat-card>\n</div>\n",
                styles: ["#info-card h5{font-weight:600}#info-card .row{display:flex;justify-content:space-between}#info-card .row .value{font-weight:500}#info-card hr{opacity:.5}"]
            })
        ], InfoCardComponent);
        return InfoCardComponent;
    }());

    var InfoCardModule = /** @class */ (function () {
        function InfoCardModule() {
        }
        InfoCardModule = __decorate([
            core.NgModule({
                declarations: [InfoCardComponent],
                exports: [
                    InfoCardComponent
                ],
                imports: [
                    common.CommonModule,
                    card.MatCardModule,
                    router.RouterModule
                ]
            })
        ], InfoCardModule);
        return InfoCardModule;
    }());

    var InfoComponent = /** @class */ (function () {
        function InfoComponent() {
        }
        InfoComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], InfoComponent.prototype, "data", void 0);
        InfoComponent = __decorate([
            core.Component({
                selector: 'app-info',
                template: "<div id=\"info\">\n    <ng-container *ngFor=\"let item of data\">\n        <div class=\"row mt-16\" >\n            <div class=\"secondary-text\">{{item.label}}</div>\n            <div *ngIf=\"item.type === 'date'\" class=\"value\">{{item.value ? (item.value | date : 'dd/MM/yyyy') : '-'}}</div>\n            <div *ngIf=\"item.type === 'number'\" class=\"value\">{{item.value ? (item.value | number:'':'fr-FR') : '-'}}</div>\n            <div *ngIf=\"item.type === 'money'\" class=\"value\">{{item.value ? (item.value | currency: 'EUR': 'symbol') : '-'}}</div>\n            <div *ngIf=\"!item.type\" class=\"value\">{{item.value ? item.value : '-'}}</div>\n        </div>\n        <hr class=\"separator\" *ngIf=\"item !== data[data.length - 1]\">\n    </ng-container>\n</div>\n",
                styles: ["#info .row{display:flex;justify-content:space-between}#info hr{opacity:.5}"]
            })
        ], InfoComponent);
        return InfoComponent;
    }());

    var InfoModule = /** @class */ (function () {
        function InfoModule() {
        }
        InfoModule = __decorate([
            core.NgModule({
                declarations: [InfoComponent],
                exports: [
                    InfoComponent
                ],
                imports: [
                    common.CommonModule
                ]
            })
        ], InfoModule);
        return InfoModule;
    }());

    exports.BackTitleComponent = BackTitleComponent;
    exports.BackTitleModule = BackTitleModule;
    exports.CardValueComponent = CardValueComponent;
    exports.CardValueModule = CardValueModule;
    exports.InfoCardComponent = InfoCardComponent;
    exports.InfoCardModule = InfoCardModule;
    exports.InfoComponent = InfoComponent;
    exports.InfoModule = InfoModule;
    exports.RssItemComponent = RssItemComponent;
    exports.RssItemModule = RssItemModule;
    exports.TitleComponent = TitleComponent;
    exports.TitleModule = TitleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=xdev-lib.umd.js.map
