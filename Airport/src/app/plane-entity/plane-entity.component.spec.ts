import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneEntityComponent } from './plane-entity.component';

describe('PlaneEntityComponent', () => {
  let component: PlaneEntityComponent;
  let fixture: ComponentFixture<PlaneEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
