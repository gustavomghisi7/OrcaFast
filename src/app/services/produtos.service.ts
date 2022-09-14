import { IOrcamento, IFornecedor } from './../types';
import { IProdutoCatalago, ISelecao } from 'src/app/types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentJava } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get<IProdutoCatalago[]>(
      `${environmentJava.BASE_URL_JAVA}/produtos`
    );
  }

  salvarSelecao(dados: any) {
    return this.http.post(`${environmentJava.BASE_URL_JAVA}/selecao`, dados);
  }

  criarOrcamento(dados: any) {
    return this.http.post<IOrcamento>(
      `${environmentJava.BASE_URL_JAVA}/orcamento`,
      dados
    );
  }

  mostrarSelecao() {
    return this.http.get<ISelecao[]>(
      `${environmentJava.BASE_URL_JAVA}/selecao`
    );
  }

  mostrarOrcamentoById(id: number) {
    return this.http.get<ISelecao[]>(
      `${environmentJava.BASE_URL_JAVA}/selecao/orcamento/${id}`
    );
  }

  pegarUmOrcamento(id: number) {
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/orcamento/${id}`);
  }

  getPrecos() {
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/produtos`);
  }

  getPrecosById(id: number) {
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/produtos/${id}`);
  }
}
