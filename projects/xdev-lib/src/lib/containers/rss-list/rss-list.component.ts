import {Component, Input, OnInit} from '@angular/core';
import {NewsRss} from '../../../../../models/interfaces/rss';

@Component({
  selector: 'app-rss-list',
  templateUrl: './rss-list.component.html',
  styleUrls: ['./rss-list.component.scss']
})
export class RssListComponent implements OnInit {

  @Input() rssFeedData?: NewsRss = null;

  constructor() { }

  ngOnInit(): void {
  }

}
