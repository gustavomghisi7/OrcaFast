import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsuariosService } from '../../services/usuarios.service';

declare const M: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  idUsuario: number = 0
  usuario: any = {}

  constructor(private usuarioService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  inscricaoGetUmUsuario: any = Subscription;

  ngOnInit(): void {
    
    var user = this.usuarioService.getDadosToken()
    if(user.perfil == 'USUARIO') {
      const linkCadeado = document.getElementById('linkCadeado');
      if(linkCadeado) linkCadeado.style.visibility = "hidden";
    }

    M.AutoInit()
    const routeParams = this.route.snapshot.paramMap;

    this.idUsuario = Number(routeParams.get('idusuario'))
    this.inscricaoGetUmUsuario = this.usuarioService.getUmUsuario(this.idUsuario).subscribe(data => {
    this.usuario = data
  })}

  userLogado: any = this.usuarioService.getDadosToken()

  logout(): void {
    localStorage.removeItem('usertoken')
    this.userLogado = ''
    this.router.navigate([''])
    //window.location.reload()
  }

}
