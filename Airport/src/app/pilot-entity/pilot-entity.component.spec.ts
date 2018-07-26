import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotEntityComponent } from './pilot-entity.component';

describe('PilotEntityComponent', () => {
  let component: PilotEntityComponent;
  let fixture: ComponentFixture<PilotEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
