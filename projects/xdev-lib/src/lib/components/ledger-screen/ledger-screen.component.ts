import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LedgerStatus, TezosOperationComponent} from '../../containers/tezos-operation/tezos-operation.component';
import {MatStepper} from '@angular/material/stepper';
import {TezosOperationService} from '../../services/tezos-operation/tezos-operation.service';
import {Subscription} from 'rxjs';
import {MatDialogRef} from '@angular/material/dialog';
import {InfoData} from '../info-card/info-card.component';
import {MatTooltip} from '@angular/material/tooltip';
import {MatButton} from '@angular/material/button';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
    selector: 'app-ledger-screen',
    templateUrl: './ledger-screen.component.html',
    styleUrls: ['./ledger-screen.component.scss'],
    providers: [
        {
            provide:  STEPPER_GLOBAL_OPTIONS,
            useValue: { showError: true }
        }
    ]
})
export class LedgerScreenComponent implements OnInit, OnDestroy {

    @Input() status: LedgerStatus;
    @Input() ledgerErr: string;
    @Input() operationId: number;
    @Input() tx: string;
    @Input() signData: InfoData[];
    @Input() dialogRef: MatDialogRef<TezosOperationComponent>;
    @Input() resetFunc: () => Promise<void>;

    @ViewChild('stepper') private myStepper: MatStepper;
    @ViewChild('tooltip') private myTooltip: MatTooltip;
    @ViewChild('copyBut') private copyBut: MatButton;


    nextStepSub: Subscription;
    backStepSub: Subscription;


    constructor(private _tezosOpService: TezosOperationService) {
    }

    ngOnInit(): void {
        this.nextStepSub = this._tezosOpService.nextStep.subscribe(
            () => this.goForward()
        );
        this.backStepSub = this._tezosOpService.backStep.subscribe(
            () => this.goBack()
        );
    }

    onLeave = (event): void => {
        this.myTooltip.hide();
        event.stopImmediatePropagation();
    }

    copyClick = () => {
        this.myTooltip.toggle();
        this.copyBut['_elementRef'].nativeElement.classList.remove('cdk-program-focused');
    }

    goReset = async (): Promise<void> => {
        await this.resetFunc();
        this.myStepper.reset();
    }

    goBack(): void {
        this.myStepper.previous();
    }

    goForward(): void {
        this.myStepper.next();
    }

    ngOnDestroy(): void {
        this.nextStepSub.unsubscribe();
        this.backStepSub.unsubscribe();
    }

}
