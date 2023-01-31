import { TestBed } from '@angular/core/testing';

import { CursoServiService } from './curso-servi.service';

describe('CursoServiService', () => {
  let service: CursoServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
