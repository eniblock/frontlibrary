import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
var BackTitleComponent = /** @class */ (function () {
    function BackTitleComponent(_location) {
        this._location = _location;
    }
    BackTitleComponent.prototype.historyBack = function () {
        this._location.back();
    };
    BackTitleComponent.ctorParameters = function () { return [
        { type: Location }
    ]; };
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
    return BackTitleComponent;
}());
export { BackTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly94ZGV2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JhY2stdGl0bGUvYmFjay10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8zQztJQVFFLDRCQUFvQixTQUFtQjtRQUFuQixjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQUksQ0FBQztJQUVyQyx3Q0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBSjhCLFFBQVE7O0lBTjlCO1FBQVIsS0FBSyxFQUFFOzREQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTsyREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7OERBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOzREQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTtvREFBYztJQU5YLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLHExQkFBMEM7O1NBRTNDLENBQUM7T0FDVyxrQkFBa0IsQ0FjOUI7SUFBRCx5QkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1iYWNrLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JhY2stdGl0bGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9iYWNrLXRpdGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFja1RpdGxlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0aXRsZVNlY3Rpb246IHN0cmluZztcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgYmNrRGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBlbmRpbmdWYWx1ZT86IHN0cmluZztcbiAgQElucHV0KCkgbGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbikgeyB9XG5cbiAgcHVibGljIGhpc3RvcnlCYWNrKCk6IHZvaWQge1xuICAgIHRoaXMuX2xvY2F0aW9uLmJhY2soKTtcbiAgfVxuXG59XG4iXX0=