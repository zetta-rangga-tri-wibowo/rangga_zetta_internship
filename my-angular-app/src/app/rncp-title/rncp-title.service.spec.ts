import { TestBed } from '@angular/core/testing';

import { RncpTitleService } from './rncp-title.service';

describe('RncpTitleService', () => {
  let service: RncpTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RncpTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
