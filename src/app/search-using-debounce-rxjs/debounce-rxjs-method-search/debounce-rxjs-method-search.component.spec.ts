import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceRxjsMethodSearchComponent } from './debounce-rxjs-method-search.component';

describe('DebounceRxjsMethodSearchComponent', () => {
  let component: DebounceRxjsMethodSearchComponent;
  let fixture: ComponentFixture<DebounceRxjsMethodSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebounceRxjsMethodSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceRxjsMethodSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
