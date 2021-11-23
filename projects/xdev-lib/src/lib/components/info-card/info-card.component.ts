import {Component, Input} from '@angular/core';

export interface InfoData {
    label: string;
    value: any;
    customClass?: string;
    type?: string;
    link?: string;
    callback?: (event?) => void;
    buttonLabel?: string;
    buttonDisabled?: boolean;
    options?: { label: string, value: string }[];
}

@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

    @Input() data: InfoData[];
    @Input() title: string;


    constructor() {
    }


}
