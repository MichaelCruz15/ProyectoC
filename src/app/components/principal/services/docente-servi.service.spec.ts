import { TestBed } from '@angular/core/testing';

import { DocenteServiService } from './docente-servi.service';

describe('CursoServiService', () => {
  let service: DocenteServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocenteServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
