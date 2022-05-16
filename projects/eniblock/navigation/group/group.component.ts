import {Component, Input} from '@angular/core';
import {NavigationItem} from '../models/navigation-item';

@Component({
    selector: 'eni-nav-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class NavigationGroupComponent {
    @Input() item: NavigationItem;

}
