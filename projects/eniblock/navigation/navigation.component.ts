import {Component, Input} from '@angular/core';
import {NavigationItem} from './models/navigation-item';

@Component({
    selector: 'eni-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    @Input() navigation: NavigationItem[];
}
