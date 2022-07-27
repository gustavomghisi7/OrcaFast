import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
  }

  userLogado: any = this.usuarioService.getDadosToken()

  logout(): void {
    localStorage.removeItem('usertoken')
    this.userLogado = ''
    window.location.reload()
  }

}
