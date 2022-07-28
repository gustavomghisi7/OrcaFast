import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    M.updateTextFields()
  }

  cadastrarUsuario(dados: any): void {
    this.service.cadastrarUsuario(dados).subscribe(data => M.toast 
       ({ html: this.msg, classes: 'rounded green' }))
  }
}


