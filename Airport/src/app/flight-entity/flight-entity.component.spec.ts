import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEntityComponent } from './flight-entity.component';

describe('FlightEntityComponent', () => {
  let component: FlightEntityComponent;
  let fixture: ComponentFixture<FlightEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
