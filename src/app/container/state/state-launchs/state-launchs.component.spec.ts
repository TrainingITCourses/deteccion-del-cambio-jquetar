import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateLaunchsComponent } from './state-launchs.component';

describe('StateLaunchsComponent', () => {
  let component: StateLaunchsComponent;
  let fixture: ComponentFixture<StateLaunchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateLaunchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateLaunchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
