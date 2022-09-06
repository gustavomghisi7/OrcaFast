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

  salvarSelecao(dados:any){
    return this.http.post(`${environmentJava.BASE_URL_JAVA}/selecao`, dados)
  }

  criarOrcamento(dados: any){
    return this.http.post(`${environmentJava.BASE_URL_JAVA}/orcamento`, dados)
  }

  mostrarOrcamento(){
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/selecao`)
  }

  deletarFornecedor(id: number) {
    return this.http.delete(`${environmentJava.BASE_URL_JAVA}/fornecedor/${id}`)
  }

  getFornecedor() {
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/fornecedor`)
  }

  getPrecos(){
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/produtos`)
  }

  getPrecosById(id: number){
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/produtos/${id}`)
  }


}
