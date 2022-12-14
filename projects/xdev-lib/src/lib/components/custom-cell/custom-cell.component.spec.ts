import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCellComponent } from './custom-column.component';

describe('CustomColumnComponent', () => {
  let component: CustomCellComponent;
  let fixture: ComponentFixture<CustomCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [CustomCellComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
