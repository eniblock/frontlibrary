import {Component, Input} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-title',
  templateUrl: './back-title.component.html',
  styleUrls: ['./back-title.component.scss']
})
export class BackTitleComponent {

  @Input() title: string;
  @Input() link: string;

  constructor(private _location: Location) { }

  public historyBack(): void {
    this._location.back();
  }

}
