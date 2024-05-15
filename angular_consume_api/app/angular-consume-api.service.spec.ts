import { TestBed } from '@angular/core/testing';

import { AngularConsumeAPIService } from './angular-consume-api.service';

describe('AngularConsumeAPIService', () => {
  let service: AngularConsumeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularConsumeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
