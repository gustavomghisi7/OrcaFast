import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUserService implements CanActivate {
  constructor(private router: Router, private service: UsuariosService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var user = this.service.getDadosToken()

    const routeParams = route.paramMap
    const idUsuario = Number(routeParams.get('idusuario'))

    if ((user.perfil == "USUARIO" && user.id == idUsuario) || user.perfil == 'ADM') {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }
}
