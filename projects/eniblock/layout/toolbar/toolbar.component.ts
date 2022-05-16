import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../layout.service';

@Component({
    selector: 'eni-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    constructor(
        private _layoutService: LayoutService
    ) {
    }

    ngOnInit(): void {
    }

    toggleSidebar(): void {
        this._layoutService.toggleSidenav();
    }

}
