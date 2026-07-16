import { TestBed } from '@angular/core/testing';

import { NuitService } from './nuit-service';

describe('NuitService', () => {
  let service: NuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
