import { TestBed } from '@angular/core/testing';

import { DeliverablesApiService } from './deliverables-api.service';

describe('DeliverablesApiService', () => {
  let service: DeliverablesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverablesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
