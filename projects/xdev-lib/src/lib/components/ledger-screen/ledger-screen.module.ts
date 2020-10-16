import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerScreenComponent } from './ledger-screen.component';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {InfoModule} from '../info/info.module';
import {ShowMoreModule} from '../show-more/show-more.module';
import {MatInputModule} from '@angular/material/input';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
    declarations: [LedgerScreenComponent],
    exports: [
        CommonModule,
        MatIconModule,
        ClipboardModule,
        LedgerScreenComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        InfoModule,
        ShowMoreModule,
        MatInputModule,
        ClipboardModule,
        MatTooltipModule,
        RouterModule,
        TranslateModule.forChild()
    ]
})
export class LedgerScreenModule { }
