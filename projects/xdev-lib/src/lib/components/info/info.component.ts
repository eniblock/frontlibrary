import {Component, Input, OnInit} from '@angular/core';
import {InfoData} from '../info-card/info-card.component';

@Component({
  selector: 'lib-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() data: InfoData[];

  constructor() { }

  ngOnInit(): void {
  }

}
