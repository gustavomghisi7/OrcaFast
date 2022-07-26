import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  constructor(private service: UsuariosService) { }

  ngOnInit(): void {
    this.mostrarUsuarios()
  }

  usuarios: any = []
  mostrarUsuarios(): void {
    this.service.getUsuarios().subscribe(data => {
      this.usuarios = data

    })

  }

  msg: string = ''
  deletarUsuario(id: number): void {
    console.log('tentou deletar')
    this.service.deletarUsuario(id).subscribe(() => {
      this.msg = 'Usuario excluído com sucesso',
      window.location.reload()
    })
  }

}

