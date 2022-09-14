import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsuariosService } from './../../services/usuarios.service';

declare const M: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  idUsuario: number = 0;
  usuario: any = {};
  razaosocial: string = '';
  cnpj: string = '';
  email: string = '';
  senha: string = '';
  telefone: string = '';
  celular: string = '';
  cep: string = '';
  rua: string = '';
  numeroendereco: string = '';
  complementoendereco: string = '';
  bairro: string = '';
  estado: string = '';
  cidade: string = '';
  logo: string = '';
  perfil: string = '';

  constructor(private service: UsuariosService) { }

  msg: string = 'Usuário cadastrado com sucesso';

  inscricaoCadastrar: any = Subscription;

  ngOnInit(): void {
    M.updateTextFields();
  }

  cadastrarUsuario(dados: any): void {
    this.inscricaoCadastrar = this.service
      .cadastrarUsuario(dados)
      .subscribe((data) =>
        M.toast({ html: this.msg, classes: 'rounded green' })
      );
  }

  capturarEndereco(cep: string) {
    this.service.pegarEndereco(cep).subscribe((data) => {
      let endereco: any = {};
      endereco = data;
      this.usuario.rua = endereco.logradouro;

      this.usuario.bairro = endereco.bairro;

      this.usuario.estado = endereco.uf;

      this.usuario.cidade = endereco.localidade;
    });
  }

  pegarCep(evento: any) {
    let cep = evento.target.value;
    this.capturarEndereco(cep);
  }

  ngOnDestroy(): void {
    this.inscricaoCadastrar.unsubscribe;
  }
}
