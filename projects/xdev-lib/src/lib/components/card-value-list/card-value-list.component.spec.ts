import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardValueListComponent } from './card-value-list.component';

describe('CardValueListComponent', () => {
  let component: CardValueListComponent;
  let fixture: ComponentFixture<CardValueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CardValueListComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardValueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
