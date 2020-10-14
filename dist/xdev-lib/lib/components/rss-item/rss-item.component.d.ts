import { OnInit } from '@angular/core';
import { IRssItem } from '../../../models/interfaces/rss';
export declare class RssItemComponent implements OnInit {
    rssItem: IRssItem;
    extractContent: (s: any) => string;
    constructor();
    ngOnInit(): void;
}
