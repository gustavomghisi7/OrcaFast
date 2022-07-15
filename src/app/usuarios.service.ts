import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }


  getUsuarios(){
    return this.http.get(`${environment.BASE_URL}usuarios`)
  }

  getUmUsuário(id:number){
    return this.http.get(`${environment.BASE_URL}usuarios/${id}`)
  }
}
