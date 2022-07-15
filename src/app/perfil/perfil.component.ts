import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  idUsuario: number = 0
  usuario: any = {}
  razaoSocial: string = ''
  cnpj: string = ''
  email: string = ''
  senha: string = ''
  telefone: string = ''
  celular: string = ''
  cep: string = ''
  rua: string = ''
  numeroEndereco: string = ''
  complementoEndereco: string = ''
  bairro: string = ''
  estado: string = ''
  cidade: string = ''
  logoUsuario: string = ''
  
  constructor(private service:UsuariosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   const routeParams = this.route.snapshot.paramMap;
   this.idUsuario = Number(routeParams.get('idusuario'))
   this.service.getUmUsuario(this.idUsuario).subscribe(data => {
    this.usuario = data
    console.log(this.usuario)
   })}
   
 
  msg: string = ""
 
  
}
