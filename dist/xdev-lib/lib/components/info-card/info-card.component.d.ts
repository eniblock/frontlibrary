import { OnInit } from '@angular/core';
export interface InfoData {
    label: string;
    value: any;
    type?: string;
    link?: string;
}
export declare class InfoCardComponent implements OnInit {
    data: InfoData[];
    title: string;
    constructor();
    ngOnInit(): void;
}
