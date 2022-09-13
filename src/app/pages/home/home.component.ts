import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare const M: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor( private service: UsuariosService, private router:Router ) { }


  ngOnInit(): void {

    M.updateTextFields()
    M.AutoInit()

  }

  msg: string = "Dados enviados com sucesso"

  ativaToast(): void {
    M.toast
    (
      { html: this.msg, classes: 'rounded green' }
    )
  }

  logar(dados:any){
    //console.log(dados)
    this.service.logar(dados).subscribe(data => {
      let token = JSON.stringify(data)
      let x = JSON.parse(token)
      localStorage.setItem('usertoken', x.token)



      var user = this.service.getDadosToken()
      if (user.perfil == 'ADM') {
        this.router.navigate(['/adm'])
      } else if (user.perfil == 'USUARIO'){
        this.router.navigate([`/perfil/${user.id}`])
      }
    })

  }

}
