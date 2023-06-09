import { TestBed } from '@angular/core/testing';

import { ActiviteamicaleService } from './activiteamicale.service';

describe('ActiviteamicaleService', () => {
  let service: ActiviteamicaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiviteamicaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
