import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var RssItemComponent = /** @class */ (function () {
    function RssItemComponent() {
        this.extractContent = function (s) {
            var span = document.createElement('span');
            span.innerHTML = s;
            return span.textContent || span.innerText;
        };
    }
    RssItemComponent.prototype.ngOnInit = function () {
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
    return RssItemComponent;
}());
export { RssItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnNzLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8veGRldi1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yc3MtaXRlbS9yc3MtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBUXZEO0lBVUU7UUFOQSxtQkFBYyxHQUFHLFVBQUMsQ0FBQztZQUNqQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzVDLENBQUMsQ0FBQTtJQUVlLENBQUM7SUFFakIsbUNBQVEsR0FBUjtJQUNBLENBQUM7SUFYUTtRQUFSLEtBQUssRUFBRTtxREFBbUI7SUFGaEIsZ0JBQWdCO1FBTDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLDJ6QkFBd0M7O1NBRXpDLENBQUM7T0FDVyxnQkFBZ0IsQ0FlNUI7SUFBRCx1QkFBQztDQUFBLEFBZkQsSUFlQztTQWZZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SVJzc0l0ZW19IGZyb20gJy4uLy4uLy4uL21vZGVscy9pbnRlcmZhY2VzL3Jzcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yc3MtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yc3MtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jzcy1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUnNzSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcnNzSXRlbTogSVJzc0l0ZW07XG5cbiAgZXh0cmFjdENvbnRlbnQgPSAocykgPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5pbm5lckhUTUwgPSBzO1xuICAgIHJldHVybiBzcGFuLnRleHRDb250ZW50IHx8IHNwYW4uaW5uZXJUZXh0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=