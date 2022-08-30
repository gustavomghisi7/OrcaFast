import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/services/produtos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  produtos: any = []

  listaSelecao: any = []

  constructor(private service: ProdutosService) { }

  inscricaoGetProdutos: any = Subscription;

  ngOnInit(): void {
    this.pegarTodosOsProdutos()
  }

  pegarTodosOsProdutos(): void {
    this.inscricaoGetProdutos = this.service.getProdutos()
      .subscribe(data => this.produtos = data)
  }

  selecionarItem(item: any) {
    const produto = this.produtos.find((prod: any) => prod.id == item.id)
    produto.selecionado = !(produto.selecionado || false);
    this.listaSelecao = this.produtos.filter((prod: any) => prod.selecionado)
  }

  ngOnDestroy(): void {
    this.inscricaoGetProdutos.unsubscribe;
  }

}