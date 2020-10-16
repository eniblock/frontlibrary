import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Utils} from '../../utils/Utils';
import {InfoData} from '../info-card/info-card.component';

export interface CardValueData {
  label: string;
  value: number | string;
  unit: string;
  icon: string;
}

@Component({
  selector: 'app-card-value-list',
  templateUrl: './card-value-list.component.html',
  styleUrls: ['./card-value-list.component.scss']
})
export class CardValueListComponent implements OnInit, OnChanges {

  @Input() data: CardValueData[];
  @Input() pendingValue?: InfoData[];

  tooltip: string[];

  typeOf = (elem) => {
    return typeof elem;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pendingValue) {
      this.tooltip = new Utils().createTooltip(this.pendingValue);
    }
  }

}
