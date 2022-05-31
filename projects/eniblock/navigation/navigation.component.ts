import {Component} from '@angular/core';
import {NavigationItem} from './models/navigation-item';
import {NavigationService} from './navigation.service';

@Component({
    selector: 'eni-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    navigation: NavigationItem[];

    constructor(
        private _navigationService: NavigationService
    ) {
        this.navigation = _navigationService.navigation;
    }
}
