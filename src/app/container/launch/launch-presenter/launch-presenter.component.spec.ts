import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPresenterComponent } from './launch-presenter.component';

describe('LaunchPresenterComponent', () => {
  let component: LaunchPresenterComponent;
  let fixture: ComponentFixture<LaunchPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
