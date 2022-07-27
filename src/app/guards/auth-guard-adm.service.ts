import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmService implements CanActivate {

  constructor(private router: Router, private service: UsuariosService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var adm = this.service.getDadosToken()

    let usuarioLogadoAdm: boolean = adm.perfil == 'ADM'
    if (usuarioLogadoAdm) {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }
}
