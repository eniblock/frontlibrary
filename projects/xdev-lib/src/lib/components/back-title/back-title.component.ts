import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-back-title',
  templateUrl: './back-title.component.html',
  styleUrls: ['./back-title.component.scss']
})
export class BackTitleComponent implements OnInit {

  @Input() titleSection: string;
  @Input() description: string;
  @Input() link: string;


  constructor() { }

  ngOnInit(): void {
  }

}
