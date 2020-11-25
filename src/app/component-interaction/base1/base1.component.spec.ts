import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base1Component } from './base1.component';

describe('Base1Component', () => {
  let component: Base1Component;
  let fixture: ComponentFixture<Base1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Base1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
