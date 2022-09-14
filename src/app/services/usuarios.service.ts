import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode"

import { environment, environmentCep, environmentJava } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${environment.BASE_URL}/usuarios`)
  }

  getUmUsuario(id: number) {
    return this.http.get(`${environment.BASE_URL}/usuarios/${id}`)
  }

  alterarUsuario(dados: any) {
    return this.http.put(`${environment.BASE_URL}/usuarios/${dados.id}`, dados)
  }

  deletarUsuario(id: number) {
    return this.http.delete(`${environment.BASE_URL}/usuarios/${id}`)
  }

  cadastrarUsuario(dados: any) {
    return this.http.post(`${environment.BASE_URL}/usuarios`, dados)
  }

  logar(dados: any) {
    return this.http.post(`${environment.BASE_URL}/usuarios/login`, dados)
  }

  getDadosToken() {
    var token = localStorage.getItem('usertoken') || ''

    if (token !== '') {
      var bodyToken = jwt_decode(token)
      var tokenJson = JSON.stringify(bodyToken)
      var tokenDecodificado = JSON.parse(tokenJson)
      return tokenDecodificado
    }

    return ''
  }

  deletarFornecedor(id: number) {
    return this.http.delete(`${environmentJava.BASE_URL_JAVA}/fornecedor/${id}`)
  }

  getFornecedor() {
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/fornecedor`)
  }

  pegarEndereco(cep: string) {
    return this.http.get(`${environmentCep.BASE_URL_CEP}/${cep}/json`)
  }

  getUmFornecedor(id: number) {
    return this.http.get(`${environmentJava.BASE_URL_JAVA}/fornecedor/${id}`)
  }

}
