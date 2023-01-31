import { TestBed } from '@angular/core/testing';

import { SwtichService } from './swtich.service';

describe('SwtichService', () => {
  let service: SwtichService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwtichService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
