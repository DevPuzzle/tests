import { TestBed } from '@angular/core/testing';

import { InvocesService } from './invoces.service';

describe('InvocesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvocesService = TestBed.get(InvocesService);
    expect(service).toBeTruthy();
  });
});
