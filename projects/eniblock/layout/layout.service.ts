import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    private sidenavOpened = new BehaviorSubject<boolean>(false);
    private _$sidenavOpened = this.sidenavOpened.asObservable();

    get $sidenavOpened(): Observable<boolean> {
        return this._$sidenavOpened;
    }

    constructor() {
    }

    toggleSidenav(value?: boolean): void {
        if (typeof value === 'boolean') {
            this.sidenavOpened.next(value);
        } else {
            this.sidenavOpened.next(!this.sidenavOpened.value);
        }
    }
}
