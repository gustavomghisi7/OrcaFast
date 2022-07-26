import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: UsuariosService) { }

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
