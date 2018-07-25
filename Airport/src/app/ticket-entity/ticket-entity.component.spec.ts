import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEntityComponent } from './ticket-entity.component';

describe('TicketEntityComponent', () => {
  let component: TicketEntityComponent;
  let fixture: ComponentFixture<TicketEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
