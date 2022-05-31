import {Injectable} from '@angular/core';
import {NavigationItem} from './models/navigation-item';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private _navigation: NavigationItem[];

    constructor() {
    }

    get navigation(): NavigationItem[] {
        return this._navigation;
    }

    set navigation(value: NavigationItem[]) {
        this._navigation = value;
    }

    getNavigationItem(id: string, navigation?: NavigationItem[]): NavigationItem {

        if (!navigation) {
            navigation = this.navigation;
        }

        for (const item of navigation) {
            if (item.id === id) {
                return item;
            }

            if (item.children) {
                const childItem = this.getNavigationItem(id, item.children);

                if (childItem) {
                    return childItem;
                }
            }
        }
    }

    addNavigationItem(parent: NavigationItem, item: NavigationItem): void {
        if (!parent.children) {
            parent.children = [];
        }
        parent.children.push(item);
    }
}
