import { TestBed, inject } from '@angular/core/testing';

import { ServiceInscripcionService } from './service-inscripcion.service';

describe('ServiceInscripcionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceInscripcionService]
    });
  });

  it('should be created', inject([ServiceInscripcionService], (service: ServiceInscripcionService) => {
    expect(service).toBeTruthy();
  }));
});
