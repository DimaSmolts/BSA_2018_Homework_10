import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTypeEntityComponent } from './plane-type-entity.component';

describe('PlaneTypeEntityComponent', () => {
  let component: PlaneTypeEntityComponent;
  let fixture: ComponentFixture<PlaneTypeEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTypeEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTypeEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
