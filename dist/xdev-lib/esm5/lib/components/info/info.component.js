import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
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
    return InfoComponent;
}());
export { InfoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly94ZGV2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2luZm8vaW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBUXZEO0lBSUU7SUFBZ0IsQ0FBQztJQUVqQixnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUxRO1FBQVIsS0FBSyxFQUFFOytDQUFrQjtJQUZmLGFBQWE7UUFMekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsb3hCQUFvQzs7U0FFckMsQ0FBQztPQUNXLGFBQWEsQ0FTekI7SUFBRCxvQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0luZm9EYXRhfSBmcm9tICcuLi9pbmZvLWNhcmQvaW5mby1jYXJkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmZvLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZGF0YTogSW5mb0RhdGFbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==