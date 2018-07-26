import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOffEditComponent } from './take-off-edit.component';

describe('TakeOffEditComponent', () => {
  let component: TakeOffEditComponent;
  let fixture: ComponentFixture<TakeOffEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOffEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOffEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
