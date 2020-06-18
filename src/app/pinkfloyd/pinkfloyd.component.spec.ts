import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkfloydComponent } from './pinkfloyd.component';

describe('PinkfloydComponent', () => {
  let component: PinkfloydComponent;
  let fixture: ComponentFixture<PinkfloydComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkfloydComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkfloydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
