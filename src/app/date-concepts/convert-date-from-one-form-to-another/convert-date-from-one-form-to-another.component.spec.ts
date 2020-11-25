import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertDateFromOneFormToAnotherComponent } from './convert-date-from-one-form-to-another.component';

describe('ConvertDateFromOneFormToAnotherComponent', () => {
  let component: ConvertDateFromOneFormToAnotherComponent;
  let fixture: ComponentFixture<ConvertDateFromOneFormToAnotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertDateFromOneFormToAnotherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertDateFromOneFormToAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
