import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { TitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8veGRldi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3ZELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFNekI7UUFGUyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRVQsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUFUVTtJQUFSLEtBQUssRUFBRTs0Q0FBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzZDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7K0NBQWlCO0FBSmQsY0FBYztJQUwxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQiwrYUFBcUM7O0tBRXRDLENBQUM7R0FDVyxjQUFjLENBVzFCO1NBWFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRpdGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGl0bGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdmdJY29uID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=