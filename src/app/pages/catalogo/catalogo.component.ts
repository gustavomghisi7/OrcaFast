import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  produtos: any = []

  constructor(private service: ProdutosService) { }

  inscricaoGetProdutos: any = Subscription;

  ngOnInit(): void {
    this.pegarTodosOsProdutos()
  }

  pegarTodosOsProdutos(): void {
    this.inscricaoGetProdutos = this.service.getProdutos()
      .subscribe(data => this.produtos = data)
  }
  ngOnDestroy(): void{
    this.inscricaoGetProdutos.unsubscribe;
  }

}