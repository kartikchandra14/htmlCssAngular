import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadStartComponent } from './pad-start.component';

describe('PadStartComponent', () => {
  let component: PadStartComponent;
  let fixture: ComponentFixture<PadStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
