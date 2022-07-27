import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUserService implements CanActivate {
  constructor(private router: Router, private service: UsuariosService, private route: ActivatedRoute) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var user = this.service.getDadosToken()
    
    let usuarioLogadoUser: boolean = user.perfil == 'USUARIO'
    // const routeParams = this.route.snapshot.paramMap

    
    // const idUsuario = Number(routeParams.get('idusuario'))
    //  var idUsuario = routeParams.get('idusuario')
    if (user.perfil == "USUARIO") {
      return true
    } else {
      this.router.navigate([''])
      return false
    }
  }
}
