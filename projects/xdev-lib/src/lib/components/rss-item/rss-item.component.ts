import {Component, Input} from '@angular/core';
import {IRssItem} from '../../../models/interfaces/rss';

@Component({
    selector: 'app-rss-item',
    templateUrl: './rss-item.component.html',
    styleUrls: ['./rss-item.component.scss']
})
export class RssItemComponent {

    @Input() rssItem: IRssItem;

    extractContent = (s: string) => {
        let content = s.replace(/<img[^>]*>/g, '');
        content = content.replace(/(<([^>]+)>)/ig, '');
        const span = document.createElement('span');
        span.innerHTML = content;
        return span.textContent || span.innerText;
    }

    extractImg = (item: IRssItem) => {
        if (item.description && item.description[0]) {
            const img = item.description[0].match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);
            if (img && img.length > 1) {
                return img;
            }
        }
        if (item['content:encoded'] && item['content:encoded'][0]) {
            const img = item['content:encoded'][0].match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);
            if (img && img.length > 1) {
                return img;
            }
        }
        if (item['media:content'] && item['media:content'][0]) {
            return item['media:content'][0].$.url;
        }
        return null;
    }

    constructor() {
    }

}
