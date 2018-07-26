import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessEntityComponent } from './stewardess-entity.component';

describe('StewardessEntityComponent', () => {
  let component: StewardessEntityComponent;
  let fixture: ComponentFixture<StewardessEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardessEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
