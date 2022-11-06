import { TestBed } from '@angular/core/testing';

import { ServicioValientesService } from './servicio-valientes.service';

describe('ServicioValientesService', () => {
  let service: ServicioValientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioValientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
