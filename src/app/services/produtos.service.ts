import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentJava } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http:HttpClient) { }

  getProdutos() {
    return this.http.get((`${environmentJava.BASE_URL_JAVA}/produtos`))
  }
}
