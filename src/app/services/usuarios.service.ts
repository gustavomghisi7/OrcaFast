import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${environment.BASE_URL}/usuarios`)
  }

  getUmUsuario(id:number){
    return this.http.get(`${environment.BASE_URL}/usuarios/${id}`)
  }

  alterarUsuario(dados:any){
    return this.http.put(`${environment.BASE_URL}/usuarios/${dados.id}`, dados)
  }
}
