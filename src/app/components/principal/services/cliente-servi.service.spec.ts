import { TestBed } from '@angular/core/testing';

import { ClienteServiService } from './cliente-servi.service';

describe('ClienteServiService', () => {
  let service: ClienteServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
