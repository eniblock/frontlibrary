import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.svgIcon = false;
    }
    TitleComponent.prototype.ngOnInit = function () {
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
    return TitleComponent;
}());
export { TitleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8veGRldi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aXRsZS90aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3ZEO0lBTUU7UUFGUyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBRVQsQ0FBQztJQUVqQixpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVBRO1FBQVIsS0FBSyxFQUFFO2dEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7aURBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTttREFBaUI7SUFKZCxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLCthQUFxQzs7U0FFdEMsQ0FBQztPQUNXLGNBQWMsQ0FXMUI7SUFBRCxxQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10aXRsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aXRsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGl0bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3ZnSWNvbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19