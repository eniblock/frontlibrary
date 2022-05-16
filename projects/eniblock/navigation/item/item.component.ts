import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

import {NavigationItem} from '../models/navigation-item';

@Component({
    selector: 'eni-nav-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class NavigationItemComponent implements OnInit, OnDestroy {

    @Input() item: NavigationItem;

    private _unsubscribeAll: Subject<void>;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _location: Location
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._router.events.pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if (this._location.path() === this.item.url) {
                    this.item.active = true;
                } else {
                    this.item.active = false;
                }
                this._changeDetectorRef.markForCheck();
            });
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
