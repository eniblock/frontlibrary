import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

import {LayoutService} from './layout.service';
import {delay, Observable, Subject, takeUntil} from 'rxjs';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
    selector: 'eni-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit, OnDestroy {

    @ViewChild(MatSidenav) sidenav!: MatSidenav;
    $sidenavOpened: Observable<boolean>;

    _unsubscribeAll = new Subject<void>();

    constructor(
        private _layoutService: LayoutService,
        private _observer: BreakpointObserver
    ) {
        this.$sidenavOpened = this._layoutService.$sidenavOpened;
    }

    ngAfterViewInit(): void {
        this._observer.observe(['(max-width: 1280px)'])
            .pipe(delay(1), takeUntil(this._unsubscribeAll))
            .subscribe(response => {
                if (response.matches) {
                    this.sidenav.mode = 'over';
                    this.sidenav.close();
                } else {
                    this.sidenav.mode = 'side';
                    this.sidenav.open();
                }
            });
    }

    sidebarOpenedChange(value: boolean): void {
        this._layoutService.toggleSidenav(value);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
