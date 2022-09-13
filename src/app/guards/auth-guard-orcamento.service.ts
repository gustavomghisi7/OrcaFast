import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProdutosService } from '../services/produtos.service';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardOrcamentoService implements CanActivate{

  constructor(private router: Router, private service: ProdutosService, private services: UsuariosService) { }
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var user = this.services.getDadosToken()
    const routeParams = route.paramMap
    const idOrcamento = Number(routeParams.get('idorcamento'))
    const idUsuario = Number(routeParams.get('idusuario'))
    var orcamento: any = {}
    this.service.pegarUmOrcamento(idOrcamento).subscribe(data =>{
        orcamento = data
        if (orcamento.usuario.id == idUsuario) {
          return true
        }else{
          this.router.navigate([''])
          //window.location.reload()
          alert('Usuário sem acesso')
          return false
        }
    })
    if (user.id != idUsuario) {
      this.router.navigate([''])
          //window.location.reload()
      alert('Usuário sem acesso')
      return false
    }

    return true
  }
}
