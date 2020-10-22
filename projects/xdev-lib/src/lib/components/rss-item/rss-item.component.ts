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
    content = content.replace( /(<([^>]+)>)/ig, '');
    const span = document.createElement('span');
    span.innerHTML = content;
    return span.textContent || span.innerText;
  }

  extractImg = (s: string) => {
    const img = s.match(/\<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/);
    return img && img.length > 1 ? img[1] : null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
