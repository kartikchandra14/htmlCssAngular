import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastHomeUsingToastHereAlsoComponent } from './toast-home-using-toast-here-also.component';

describe('ToastHomeUsingToastHereAlsoComponent', () => {
  let component: ToastHomeUsingToastHereAlsoComponent;
  let fixture: ComponentFixture<ToastHomeUsingToastHereAlsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastHomeUsingToastHereAlsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastHomeUsingToastHereAlsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
