import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { InfoCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3hkZXYtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaW5mby1jYXJkL2luZm8tY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBY3ZELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBTTVCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0NBRUYsQ0FBQTtBQVRVO0lBQVIsS0FBSyxFQUFFOytDQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtnREFBZTtBQUhaLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6Qixpb0NBQXlDOztLQUUxQyxDQUFDO0dBQ1csaUJBQWlCLENBVzdCO1NBWFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluZm9EYXRhIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbiAgdHlwZT86IHN0cmluZztcbiAgbGluaz86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWluZm8tY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZvLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZvQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZGF0YTogSW5mb0RhdGFbXTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19