import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsuariosService } from './../../services/usuarios.service';

declare const M: any

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  idUsuario: number = 0
  usuario: any = {}
  razaosocial: string = ''
  cnpj: string = ''
  email: string = ''
  senha: string = ''
  telefone: string = ''
  celular: string = ''
  cep: string = ''
  rua: string = ''
  numeroendereco: string = ''
  complementoendereco: string = ''
  bairro: string = ''
  estado: string = ''
  cidade: string = ''
  logo: string = ''
  perfil: string = ''

  constructor(private service: UsuariosService) { }

  msg: string = 'Usuário cadastrado com sucesso'

  inscricaoCadastrar: any = Subscription;

  ngOnInit(): void {
    M.updateTextFields()
  }

  cadastrarUsuario(dados: any): void {
    this.inscricaoCadastrar =this.service.cadastrarUsuario(dados).subscribe(data => M.toast 
    ({ html: this.msg, classes: 'rounded green' }))
    
  }

  capturarEndereco(cep: string){
    this.service.pegarEndereco(cep).subscribe(data =>{
      let endereco: any = {}
      endereco = data
      this.usuario.rua = endereco.logradouro
      console.log(this.usuario.rua);
      
      this.usuario.bairro = endereco.bairro
      console.log(this.usuario.bairro);
      
      this.usuario.estado = endereco.uf
      console.log(this.usuario.estado);
      
      this.usuario.cidade = endereco.localidade
      console.log(this.usuario.cidade);
      
      console.log(data)
    })
  }

  pegarCep(evento: any){
    let cep = evento.target.value
    this.capturarEndereco(cep)
    //console.log(cep);
    
  }

  ngOnDestroy(): void{
    this.inscricaoCadastrar.unsubscribe;
  }
}


