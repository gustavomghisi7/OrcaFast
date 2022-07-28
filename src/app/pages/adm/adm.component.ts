import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  constructor(private service: UsuariosService) { }

  inscricaoGet: any = Subscription;
  inscricaoDelet: any = Subscription;



  ngOnInit(): void {
    this.mostrarUsuarios()
  }

  usuarios: any = []
  mostrarUsuarios(): void {
    this.inscricaoGet = this.service.getUsuarios().subscribe(data => {
      this.usuarios = data

    })

  }

  msg: string = ''
  deletarUsuario(id: number): void {
    console.log('tentou deletar')
    this.inscricaoDelet =this.service.deletarUsuario(id).subscribe(() => {
      this.msg = 'Usuario excluído com sucesso',
      window.location.reload()
    })
  }

  ngOnDestroy(): void{
    this.inscricaoDelet.unsubscribe;
    this.inscricaoGet.unsubscribe;
  }

}

