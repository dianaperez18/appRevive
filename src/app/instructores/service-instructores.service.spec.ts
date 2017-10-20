import { TestBed, inject } from '@angular/core/testing';

import { ServiceInstructoresService } from './service-instructores.service';

describe('ServiceInstructoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceInstructoresService]
    });
  });

  it('should be created', inject([ServiceInstructoresService], (service: ServiceInstructoresService) => {
    expect(service).toBeTruthy();
  }));
});
