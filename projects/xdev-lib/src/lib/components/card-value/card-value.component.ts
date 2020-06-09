import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-card-value',
  templateUrl: './card-value.component.html',
  styleUrls: ['./card-value.component.scss']
})
export class CardValueComponent implements OnInit {

  @Input() value: number;
  @Input() cardTitle: string;
  @Input() unit: string;
  @Input() description: string;
  @Input() refresh: () => void;


  constructor() { }

  ngOnInit(): void {
  }

}
