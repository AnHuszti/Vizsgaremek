import { TestBed } from '@angular/core/testing';

import { SpecialClassesService } from './special-classes.service';

describe('SpecialClassesService', () => {
  let service: SpecialClassesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialClassesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
