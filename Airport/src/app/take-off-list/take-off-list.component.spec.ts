import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOffListComponent } from './take-off-list.component';

describe('TakeOffListComponent', () => {
  let component: TakeOffListComponent;
  let fixture: ComponentFixture<TakeOffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOffListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
