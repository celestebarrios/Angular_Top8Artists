import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D4lComponent } from './d4l.component';

describe('D4lComponent', () => {
  let component: D4lComponent;
  let fixture: ComponentFixture<D4lComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D4lComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D4lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
