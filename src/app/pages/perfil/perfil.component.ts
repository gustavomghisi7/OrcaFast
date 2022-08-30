import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsuariosService } from '../../services/usuarios.service';

declare const M: any

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
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

  constructor(private service:UsuariosService, private route: ActivatedRoute) { }

  inscricaoGetUmUsuario: any = Subscription;
  inscricaoAlterarUsuario: any = Subscription;
  
  ngOnInit(): void {
    M.updateTextFields()

    M.AutoInit()
    const routeParams = this.route.snapshot.paramMap;

    this.idUsuario = Number(routeParams.get('idusuario'))
    this.inscricaoGetUmUsuario = this.service.getUmUsuario(this.idUsuario).subscribe(data => {
    this.usuario = data
  })}

  msg: string = "Usuário alterado"

  salvarAlteracoes(): void {
    this.inscricaoAlterarUsuario = this.service.alterarUsuario(this.usuario).subscribe(data => M.toast
    (
      { html: this.msg, classes: 'rounded green' }
    ))
  }



  ngOnDestroy(): void{
    this.inscricaoGetUmUsuario.unsubscribe;
    this.inscricaoAlterarUsuario.unsubscribe;
  }



  
}
