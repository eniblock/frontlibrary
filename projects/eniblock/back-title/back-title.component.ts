import {Component, Input} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
    selector: 'eni-back-title',
    templateUrl: './back-title.component.html',
    styleUrls: ['./back-title.component.scss']
})
export class BackTitleComponent {

    @Input() backPath?: string;

    constructor(
        private _location: Location,
        private _router: Router
    ) {
    }

    back(): void {
        if (this.backPath) {
            this._router.navigate([this.backPath]);
        } else {
            this._location.back();
        }
    }

}
