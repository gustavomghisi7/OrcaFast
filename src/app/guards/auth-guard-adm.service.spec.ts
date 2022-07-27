import { TestBed } from '@angular/core/testing';

import { AuthGuardAdmService } from './auth-guard-adm.service';

describe('AuthGuardAdmService', () => {
  let service: AuthGuardAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
