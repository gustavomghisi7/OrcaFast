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
