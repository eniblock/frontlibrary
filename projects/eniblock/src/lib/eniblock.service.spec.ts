import { TestBed } from '@angular/core/testing';

import { EniblockService } from './eniblock.service';

describe('EniblockService', () => {
  let service: EniblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EniblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
