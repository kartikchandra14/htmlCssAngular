import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateConceptsHomeComponent } from './date-concepts-home.component';

describe('DateConceptsHomeComponent', () => {
  let component: DateConceptsHomeComponent;
  let fixture: ComponentFixture<DateConceptsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateConceptsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateConceptsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
