import {Component, Input} from '@angular/core';
import {InfoData} from '../info-card/info-card.component';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent {

    @Input() data: InfoData[];

    constructor() {
    }

}
