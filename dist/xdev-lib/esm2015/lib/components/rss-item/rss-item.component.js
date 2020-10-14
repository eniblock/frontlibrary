import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let RssItemComponent = class RssItemComponent {
    constructor() {
        this.extractContent = (s) => {
            const span = document.createElement('span');
            span.innerHTML = s;
            return span.textContent || span.innerText;
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], RssItemComponent.prototype, "rssItem", void 0);
RssItemComponent = __decorate([
    Component({
        selector: 'app-rss-item',
        template: "<a [href]=\"rssItem.link[0]\" target=\"_blank\" *ngIf=\"rssItem\">\n    <mat-card id=\"rss-item\">\n        <div class=\"content\">\n            <div class=\"img mr-12\">\n                <img *ngIf=\"rssItem['itunes:image'] && rssItem['itunes:image'].length > 0\" [src]=\"rssItem['itunes:image'][0].$.href\">\n            </div>\n            <div class=\"info\">\n                <h2 class=\"pt-0 mt-0\">{{rssItem.title[0]}}</h2>\n                <div class=\"info-item\">\n                    <mat-icon class=\"secondary-text mr-12\">alarm</mat-icon>\n                    <div>{{rssItem.pubDate[0] | date: 'dd/MM/yyyy'}}</div>\n                </div>\n                <div [innerHTML]=\"extractContent(rssItem.description[0])\" class=\"mt-12\"></div>\n            </div>\n        </div>\n    </mat-card>\n</a>\n\n",
        styles: ["#rss-item .content{display:flex;flex-direction:row;height:155px;overflow:hidden}#rss-item .content .img,#rss-item .content .img img{max-width:155px;width:100%;height:100%}#rss-item .content .info .info-item{display:flex;align-items:flex-end}"]
    })
], RssItemComponent);
export { RssItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnNzLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8veGRldi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yc3MtaXRlbS9yc3MtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBUXZELElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBVTNCO1FBTkEsbUJBQWMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUMsQ0FBQyxDQUFBO0lBRWUsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztDQUVGLENBQUE7QUFiVTtJQUFSLEtBQUssRUFBRTtpREFBbUI7QUFGaEIsZ0JBQWdCO0lBTDVCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLDJ6QkFBd0M7O0tBRXpDLENBQUM7R0FDVyxnQkFBZ0IsQ0FlNUI7U0FmWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lSc3NJdGVtfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvaW50ZXJmYWNlcy9yc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcnNzLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcnNzLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yc3MtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJzc0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHJzc0l0ZW06IElSc3NJdGVtO1xuXG4gIGV4dHJhY3RDb250ZW50ID0gKHMpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uaW5uZXJIVE1MID0gcztcbiAgICByZXR1cm4gc3Bhbi50ZXh0Q29udGVudCB8fCBzcGFuLmlubmVyVGV4dDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19