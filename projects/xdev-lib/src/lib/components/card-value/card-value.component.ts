import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-card-value',
    templateUrl: './card-value.component.html',
    styleUrls: ['./card-value.component.scss']
})
export class CardValueComponent {

    @Input() value: number;
    @Input() cardTitle: string;
    @Input() unit: string;
    @Input() description: string;
    @Input() refresh: () => void;


    constructor() {
    }


}
