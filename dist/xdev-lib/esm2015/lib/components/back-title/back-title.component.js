import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
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
export { BackTitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly94ZGV2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JhY2stdGl0bGUvYmFjay10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU8zQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQVE3QixZQUFvQixTQUFtQjtRQUFuQixjQUFTLEdBQVQsU0FBUyxDQUFVO0lBQUksQ0FBQztJQUVyQyxXQUFXO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUVGLENBQUE7O1lBTmdDLFFBQVE7O0FBTjlCO0lBQVIsS0FBSyxFQUFFO3dEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTt1REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7MERBQXlCO0FBQ3hCO0lBQVIsS0FBSyxFQUFFO3dEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtnREFBYztBQU5YLGtCQUFrQjtJQUw5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLHExQkFBMEM7O0tBRTNDLENBQUM7R0FDVyxrQkFBa0IsQ0FjOUI7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYmFjay10aXRsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9iYWNrLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFjay10aXRsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tUaXRsZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdGl0bGVTZWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJja0Rlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBASW5wdXQoKSBwZW5kaW5nVmFsdWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbms6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2NhdGlvbjogTG9jYXRpb24pIHsgfVxuXG4gIHB1YmxpYyBoaXN0b3J5QmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2NhdGlvbi5iYWNrKCk7XG4gIH1cblxufVxuIl19