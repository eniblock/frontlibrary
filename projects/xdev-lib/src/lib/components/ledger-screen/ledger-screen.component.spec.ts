import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerScreenComponent } from './ledger-screen.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('LedgerScreenComponent', () => {
  let component: LedgerScreenComponent;
  let fixture: ComponentFixture<LedgerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerScreenComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
