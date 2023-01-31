import { TestBed } from '@angular/core/testing';
import { horariosServiService } from './horario-servi.service';
describe('horariosServiService', () => {
  let service: horariosServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(horariosServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
