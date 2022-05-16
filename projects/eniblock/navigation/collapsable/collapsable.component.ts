import {Location} from '@angular/common';
import {ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {NavigationItem} from '../models/navigation-item';

@Component({
    selector: 'eni-nav-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls: ['./collapsable.component.scss'],
    animations: [
        trigger('slideInOut', [
            state('0', style({
                height: '0px'
            })),
            state('1', style({
                height: '*'
            })),
            transition('1 => 0', animate('300ms ease-out')),
            transition('0 => 1', animate('300ms ease-in'))
        ])
    ]
})
export class NavigationCollapsableComponent implements OnInit, OnDestroy {
    @Input() item: NavigationItem;

    @HostBinding('class') classes = 'nav-collapsable nav-item';

    @HostBinding('class.open') public isOpen = false;

    // Private
    private _unsubscribeAll: Subject<void>;

    /**
     * Constructor
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {Router} _router
     * @param {Location} _location
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _location: Location
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Listen for router events
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((event: NavigationEnd) => {

                // Check if the url can be found in
                // one of the children of this item
                // or in the item itself
                if (event.urlAfterRedirects.includes(this.getCompleteUrl(this.item)) ||
                    this.isUrlInChildren(this.item, event.urlAfterRedirects)) {
                    this.expand();
                    this.item.active = true;
                } else {
                    this.collapse();
                    this.item.active = false;
                }
            });

        // Check if the url can be found in
        // one of the children of this item
        if (this._router.url.includes(this.getCompleteUrl(this.item)) ||
            this.isUrlInChildren(this.item, this._router.url)) {
            this.expand();
        } else {
            this.collapse();
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle collapse
     *
     * @param ev
     */
    toggleOpen(ev): void {
        ev.preventDefault();

        this.isOpen = !this.isOpen;
    }

    /**
     * Expand the collapsable navigation
     */
    expand(): void {
        if (this.isOpen) {
            return;
        }

        this.isOpen = true;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Collapse the collapsable navigation
     */
    collapse(): void {
        if (!this.isOpen) {
            return;
        }

        this.isOpen = false;

        // Mark for check
        this._changeDetectorRef.markForCheck();
    }

    /**
     * Check if the given parent has the
     * given item in one of its children
     *
     * @param parent
     * @param item
     * @returns {boolean}
     */
    isChildrenOf(parent, item): boolean {
        const children = parent.children;

        if (!children) {
            return false;
        }

        if (children.indexOf(item) > -1) {
            return true;
        }

        for (const child of children) {
            if (child.children) {
                if (this.isChildrenOf(child, item)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Check if the given url can be found
     * in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
    isUrlInChildren(parent, url): boolean {
        const children = parent.children;

        if (!children) {
            return false;
        }

        for (const child of children) {
            if (child.children) {
                if (this.isUrlInChildren(child, url)) {
                    return true;
                }
            }

            if (child.url === url || url.includes(child.url)) {
                return true;
            }
        }

        return false;
    }

    getCompleteUrl(item): string {
        let itemUrl = item.url;
        if (item.queryParams) {
            itemUrl += '?';
            Object.keys(item.queryParams).map((key, index) => {
                itemUrl += (index > 0 ? '&' : '') + key + '=' + item.queryParams[key];
            });
        }
        return itemUrl;
    }

}
