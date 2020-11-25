import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsMethodsHomeComponent } from './js-methods-home.component';

describe('JsMethodsHomeComponent', () => {
  let component: JsMethodsHomeComponent;
  let fixture: ComponentFixture<JsMethodsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsMethodsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsMethodsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
