import { TestBed } from '@angular/core/testing';

import { VenteachatService } from './venteachat.service';

describe('VenteachatService', () => {
  let service: VenteachatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenteachatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
