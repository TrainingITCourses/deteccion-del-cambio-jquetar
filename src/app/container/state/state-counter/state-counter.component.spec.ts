import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCounterComponent } from './state-counter.component';

describe('StateCounterComponent', () => {
  let component: StateCounterComponent;
  let fixture: ComponentFixture<StateCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
