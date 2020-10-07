import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageViewInCircleComponent } from './percentage-view-in-circle.component';

describe('PercentageViewInCircleComponent', () => {
  let component: PercentageViewInCircleComponent;
  let fixture: ComponentFixture<PercentageViewInCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageViewInCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageViewInCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
