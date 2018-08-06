import { TestBed, inject } from '@angular/core/testing';

import { SetlocationService } from './setlocation.service';

describe('SetlocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetlocationService]
    });
  });

  it('should be created', inject([SetlocationService], (service: SetlocationService) => {
    expect(service).toBeTruthy();
  }));
});
