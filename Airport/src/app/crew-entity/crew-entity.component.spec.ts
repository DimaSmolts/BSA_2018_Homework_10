import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewEntityComponent } from './crew-entity.component';

describe('CrewEntityComponent', () => {
  let component: CrewEntityComponent;
  let fixture: ComponentFixture<CrewEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
