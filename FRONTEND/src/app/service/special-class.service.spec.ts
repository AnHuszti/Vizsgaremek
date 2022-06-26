import { TestBed } from '@angular/core/testing';

import { SpecialClassService } from './special-class.service';

describe('SpecialClassService', () => {
  let service: SpecialClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
