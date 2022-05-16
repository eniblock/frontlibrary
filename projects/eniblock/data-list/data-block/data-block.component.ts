import {Component, Directive} from '@angular/core';

@Directive({
    selector: '[eni-data]',
    host: {'class': 'eni-data'},
})
export class EniData {
}

@Directive({
    selector: '[eni-data-key]',
    host: {'class': 'eni-data-key'},
})
export class EniDataKey {
}

@Directive({
    selector: '[eni-data-value]',
    host: {'class': 'eni-data-value'},
})
export class EniDataValue {
}

@Component({
    selector: 'eni-data-block',
    templateUrl: './data-block.component.html',
    styleUrls: ['./data-block.component.scss']
})
export class DataBlockComponent {
}

