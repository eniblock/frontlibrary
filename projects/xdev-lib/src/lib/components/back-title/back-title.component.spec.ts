import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackTitleComponent } from './back-title.component';

describe('BackTitleComponent', () => {
  let component: BackTitleComponent;
  let fixture: ComponentFixture<BackTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [BackTitleComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
