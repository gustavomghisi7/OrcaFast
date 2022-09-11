import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFornecedorComponent } from './perfil-fornecedor.component';

describe('PerfilFornecedorComponent', () => {
  let component: PerfilFornecedorComponent;
  let fixture: ComponentFixture<PerfilFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
