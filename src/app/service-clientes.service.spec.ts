import { TestBed, inject } from '@angular/core/testing';

import { ServiceClientesService } from './service-clientes.service';

describe('ServiceClientesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceClientesService]
    });
  });

  it('should be created', inject([ServiceClientesService], (service: ServiceClientesService) => {
    expect(service).toBeTruthy();
  }));
});
