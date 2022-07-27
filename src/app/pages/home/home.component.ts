import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, CanActivate {

  constructor( private service: UsuariosService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var user = this.service.getDadosToken()
      if (user.perfil == 'ADM') {
        console.log('adm')
        return true
        //this.router.navigate(['/adm'])
      } else if (user.perfil == 'USUARIO'){
        console.log('usuario')
        return true
        //this.router.navigate(['/perfil'])
      }
      return false
  }

  ngOnInit(): void {
  }

  logar(dados:any){
    //console.log(dados)
    this.service.logar(dados).subscribe(data => {
      //console.log(data)
      let token = JSON.stringify(data)
      let x = JSON.parse(token)
      localStorage.setItem('token', x.token)
      window.location.reload()
    })
    
  }

}
