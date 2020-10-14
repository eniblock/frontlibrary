import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
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
export { CardValueComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly94ZGV2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhcmQtdmFsdWUvY2FyZC12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3ZELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBUzdCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0NBRUYsQ0FBQTtBQVpVO0lBQVIsS0FBSyxFQUFFO2lEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7cURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO2dEQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7dURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO21EQUFxQjtBQU5sQixrQkFBa0I7SUFMOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixtekJBQTBDOztLQUUzQyxDQUFDO0dBQ1csa0JBQWtCLENBYzlCO1NBZFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2FyZC12YWx1ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLXZhbHVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC12YWx1ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRWYWx1ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcbiAgQElucHV0KCkgY2FyZFRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHVuaXQ6IHN0cmluZztcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgcmVmcmVzaDogKCkgPT4gdm9pZDtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19