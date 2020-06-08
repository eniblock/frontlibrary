import {Component, Input, OnInit} from '@angular/core';

export interface InfoData {
  label: string;
  value: any;
}

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() data: InfoData[];
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
