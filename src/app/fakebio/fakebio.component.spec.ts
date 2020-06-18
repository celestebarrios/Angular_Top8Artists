import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakebioComponent } from './fakebio.component';

describe('FakebioComponent', () => {
  let component: FakebioComponent;
  let fixture: ComponentFixture<FakebioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakebioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakebioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
