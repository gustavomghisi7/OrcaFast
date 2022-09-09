import { TestBed } from '@angular/core/testing';

import { AuthGuardOrcamentoService } from './auth-guard-orcamento.service';

describe('AuthGuardOrcamentoService', () => {
  let service: AuthGuardOrcamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardOrcamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
