import { OnInit } from '@angular/core';
export declare class CardValueComponent implements OnInit {
    value: number;
    cardTitle: string;
    unit: string;
    description: string;
    refresh: () => void;
    constructor();
    ngOnInit(): void;
}
