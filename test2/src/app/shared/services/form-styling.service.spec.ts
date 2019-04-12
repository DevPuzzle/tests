import { TestBed } from '@angular/core/testing';

import { FormStylingService } from './form-styling.service';

describe('FormStylingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormStylingService = TestBed.get(FormStylingService);
    expect(service).toBeTruthy();
  });
});
