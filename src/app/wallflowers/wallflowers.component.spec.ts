import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WallflowersComponent } from './wallflowers.component';

describe('WallflowersComponent', () => {
  let component: WallflowersComponent;
  let fixture: ComponentFixture<WallflowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WallflowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WallflowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
