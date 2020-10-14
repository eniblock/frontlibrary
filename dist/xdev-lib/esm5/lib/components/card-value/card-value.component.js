import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var CardValueComponent = /** @class */ (function () {
    function CardValueComponent() {
    }
    CardValueComponent.prototype.ngOnInit = function () {
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
    return CardValueComponent;
}());
export { CardValueComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly94ZGV2LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhcmQtdmFsdWUvY2FyZC12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBT3ZEO0lBU0U7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVZRO1FBQVIsS0FBSyxFQUFFO3FEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7eURBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO29EQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7MkRBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3VEQUFxQjtJQU5sQixrQkFBa0I7UUFMOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixtekJBQTBDOztTQUUzQyxDQUFDO09BQ1csa0JBQWtCLENBYzlCO0lBQUQseUJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jYXJkLXZhbHVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLXZhbHVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFZhbHVlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuICBASW5wdXQoKSBjYXJkVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgdW5pdDogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSByZWZyZXNoOiAoKSA9PiB2b2lkO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=