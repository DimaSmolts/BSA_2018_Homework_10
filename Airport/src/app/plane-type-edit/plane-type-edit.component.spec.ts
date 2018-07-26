import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTypeEditComponent } from './plane-type-edit.component';

describe('PlaneTypeEditComponent', () => {
  let component: PlaneTypeEditComponent;
  let fixture: ComponentFixture<PlaneTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
