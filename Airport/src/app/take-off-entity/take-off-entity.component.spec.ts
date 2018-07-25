import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOffEntityComponent } from './take-off-entity.component';

describe('TakeOffEntityComponent', () => {
  let component: TakeOffEntityComponent;
  let fixture: ComponentFixture<TakeOffEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOffEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOffEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
