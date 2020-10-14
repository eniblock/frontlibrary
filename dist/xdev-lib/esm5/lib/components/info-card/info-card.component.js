import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var InfoCardComponent = /** @class */ (function () {
    function InfoCardComponent() {
    }
    InfoCardComponent.prototype.ngOnInit = function () {
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
    return InfoCardComponent;
}());
export { InfoCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3hkZXYtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5mby1jYXJkL2luZm8tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBY3ZEO0lBTUU7SUFBZ0IsQ0FBQztJQUVqQixvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFO21EQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtvREFBZTtJQUhaLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qixpb0NBQXlDOztTQUUxQyxDQUFDO09BQ1csaUJBQWlCLENBVzdCO0lBQUQsd0JBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mb0RhdGEge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICB0eXBlPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaW5mby1jYXJkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZm8tY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luZm8tY2FyZC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEluZm9DYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBkYXRhOiBJbmZvRGF0YVtdO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=