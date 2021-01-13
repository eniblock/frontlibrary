import {Component, Input, OnInit} from '@angular/core';
import {IRssItem} from '../../../models/interfaces/rss';

@Component({
    selector: 'app-rss-item',
    templateUrl: './rss-item.component.html',
    styleUrls: ['./rss-item.component.scss']
})
export class RssItemComponent implements OnInit {

    @Input() rssItem: IRssItem;

    extractContent = (s: string) => {
        let content = s.replace(/<img[^>]*>/g, '');
        content = content.replace(/(<([^>]+)>)/ig, '');
        const span = document.createElement('span');
        span.innerHTML = content;
        return span.textContent || span.innerText;
    }

    extractImg = (content: any) => {
        if (content && content[0]) {
            return content[0].$.url;
        }
        return null;
    }

    constructor() {
    }

    ngOnInit(): void {
    }

}
