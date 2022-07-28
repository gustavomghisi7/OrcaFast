import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  produtos: any =[]

  constructor(private service:ProdutosService) { }

  ngOnInit(): void {
    this.pegarTodosOsProdutos()
  }
  
  pegarTodosOsProdutos():void{
    this.service.getProdutos()
    .subscribe(data => this.produtos = data)
  }

  
}