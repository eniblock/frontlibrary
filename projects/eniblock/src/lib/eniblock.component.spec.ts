import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniblockComponent } from './eniblock.component';

describe('EniblockComponent', () => {
  let component: EniblockComponent;
  let fixture: ComponentFixture<EniblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
