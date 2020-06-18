import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarimbaComponent } from './marimba.component';

describe('MarimbaComponent', () => {
  let component: MarimbaComponent;
  let fixture: ComponentFixture<MarimbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarimbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarimbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
