import {Component, Input, OnInit} from '@angular/core';

export interface CardValueData {
  label: string;
  value: number | string;
  unit: string;
  icon: string;
}

@Component({
  selector: 'lib-card-value-list',
  templateUrl: './card-value-list.component.html',
  styleUrls: ['./card-value-list.component.scss']
})
export class CardValueListComponent implements OnInit {

  @Input() data: CardValueData[];

  typeOf = (elem) => {
    return typeof elem;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
