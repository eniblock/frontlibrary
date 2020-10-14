import { Location } from '@angular/common';
export declare class BackTitleComponent {
    private _location;
    titleSection: string;
    description: string;
    bckDescription?: string;
    pendingValue?: string;
    link: string;
    constructor(_location: Location);
    historyBack(): void;
}
