import { TestBed } from '@angular/core/testing';

import { JsonDynamicFormService } from './json-dynamic-form.service';

describe('JsonDynamicFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonDynamicFormService = TestBed.get(JsonDynamicFormService);
    expect(service).toBeTruthy();
  });
});
