import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() icon: string;
  @Input() title: string;
  @Input() svgIcon = false;

  constructor() { }

  ngOnInit(): void {
  }

}
