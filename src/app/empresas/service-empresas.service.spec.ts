import { TestBed, inject } from '@angular/core/testing';

import { ServiceEmpresasService } from './service-empresas.service';

describe('ServiceEmpresasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceEmpresasService]
    });
  });

  it('should be created', inject([ServiceEmpresasService], (service: ServiceEmpresasService) => {
    expect(service).toBeTruthy();
  }));
});
