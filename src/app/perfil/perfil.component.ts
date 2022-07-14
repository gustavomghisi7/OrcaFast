import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuarios: any = []

  constructor(private service:UsuariosService) { }

  ngOnInit(): void {    
  }

  mostrarUsuarios():void{
    this.service.getUsuarios().subscribe(data => 
      {
        this.usuarios = data
        console.log(this.usuarios)
      })
  }

}
