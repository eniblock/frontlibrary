import {Component, Input, OnInit} from '@angular/core';
import {IRssItem} from '../../../models/interfaces/rss';

@Component({
  selector: 'app-rss-item',
  templateUrl: './rss-item.component.html',
  styleUrls: ['./rss-item.component.scss']
})
export class RssItemComponent implements OnInit {

  @Input() rssItem: IRssItem;

  extractContent = (s) => {
    const span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
