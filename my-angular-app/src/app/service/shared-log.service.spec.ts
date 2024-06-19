import { TestBed } from '@angular/core/testing';

import { SharedLogService } from './shared-log.service';

describe('SharedLogService', () => {
  let service: SharedLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
