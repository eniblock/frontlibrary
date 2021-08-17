import {Component, ElementRef, forwardRef, Input, OnDestroy, ViewChild} from '@angular/core';
import {isObservable, Observable, Subject} from 'rxjs';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

import {DataTableFilter} from '../data-table.model';
import {takeUntil} from 'rxjs/operators';
import {MatSelect} from '@angular/material/select';

@Component({
    selector: 'app-select-filter',
    templateUrl: './select-filter.component.html',
    styleUrls: ['./select-filter.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectFilterComponent),
            multi: true
        }
    ]
})
export class SelectFilterComponent implements ControlValueAccessor, OnDestroy {

    @Input() filter: DataTableFilter;

    @ViewChild('selectElement') selectElement: MatSelect;

    selectValue: any;
    data: any;
    loading: boolean;
    isOpen: boolean;
    _unsubscribeAll = new Subject();

    constructor() {
    }

    writeValue(value: any) {
        this.selectValue = value;
    }

    propagateChange = (_: any) => {
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    select(option): void {
        this.selectValue = option;
        this.propagateChange(option);
    }

    loadOptions(opened: boolean, options: any[] | Observable<any[]>): any {
        this.isOpen = opened;
        if (opened) {
            if (isObservable(options)) {
                this.loading = true;
                options
                    .pipe(takeUntil(this._unsubscribeAll))
                    .subscribe(data => {
                        this.data = data;
                        this.loading = false;
                    }, () => {
                        this.selectElement.close();
                        this.loading = false;
                    });
            } else {
                this.data = options;
            }
        }
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
