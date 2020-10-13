import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {

  @Input() moreLabel: string;
  @Input() lessLabel: string;

  showMore = false;

  clickShowMore = () => {
    this.showMore = true;
  }

  clickShowLess = () => {
    this.showMore = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
