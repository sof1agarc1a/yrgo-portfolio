import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleService = TestBed.get(ExampleService);
    expect(service).toBeTruthy();
  });

  it('Should be able to count', () => {
    const service: ExampleService = TestBed.get(ExampleService);

    service.count();
    service.count();
    service.count();

    expect(service.count()).toBe(4);
  });
});
