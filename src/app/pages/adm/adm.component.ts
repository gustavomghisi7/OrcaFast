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
  inscricaoGetFornecedor: any = Subscription;
  inscricaoDeletFornecedor: any = Subscription;

  ngOnInit(): void {
    this.mostrarUsuarios()
    this.mostrarFornecedor()
  }

  usuarios: any = []
  mostrarUsuarios(): void {
    this.inscricaoGet = this.service.getUsuarios().subscribe(data => {
      this.usuarios = data
    })
  }

  msg: string = ''
  deletarUsuario(id: number): void {
    this.inscricaoDelet = this.service.deletarUsuario(id).subscribe(() => {
      this.msg = 'Usuario excluído com sucesso',
        window.location.reload()
    })
  }

  deletarFornecedor(id: number): void {
    this.inscricaoDelet = this.service.deletarFornecedor(id).subscribe(() => {
      this.msg = 'Fornecedor excluído com sucesso',
        window.location.reload()
    })
  }

  fornecedor: any = []
  mostrarFornecedor(): void {
    this.inscricaoGetFornecedor = this.service.getFornecedor().subscribe(data => {
      this.fornecedor = data
    })
  }

  ngOnDestroy(): void {
    this.inscricaoDelet.unsubscribe;
    this.inscricaoGet.unsubscribe;
    this.inscricaoDeletFornecedor.unsubscribe;
    this.inscricaoGetFornecedor.unsubscribe;
  }
}
