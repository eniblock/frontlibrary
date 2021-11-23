import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-show-more',
    templateUrl: './show-more.component.html',
    styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent {

    @Input() moreLabel: string;
    @Input() lessLabel: string;

    showMore = false;

    clickShowMore = () => {
        this.showMore = true;
    }

    clickShowLess = () => {
        this.showMore = false;
    }

    constructor() {
    }

}
