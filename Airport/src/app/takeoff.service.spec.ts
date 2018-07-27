import { TestBed, inject } from '@angular/core/testing';

import { TakeoffService } from './takeoff.service';

describe('TakeoffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TakeoffService]
    });
  });

  it('should be created', inject([TakeoffService], (service: TakeoffService) => {
    expect(service).toBeTruthy();
  }));
});
