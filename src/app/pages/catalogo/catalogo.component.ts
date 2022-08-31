import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  idUsuario: number = 0

  produtos: any = []
  
  orcamento: any = {}

  listaIdProdutos: any = {}

  listaSelecao: any = []

  constructor(private service: ProdutosService, private route: ActivatedRoute) { }

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
//Nesta função vai ter, 
// gerar id do orçamento ok
// pegar id do usuário URL ok
// tratar o dado do Produto o
// juntar tudo em objeto
// enviar para URL seleção.

  salvarSelecao(){
    const routeParams = this.route.snapshot.paramMap;
    this.idUsuario = Number(routeParams.get('idusuario'))
    //console.log(this.idUsuario)
    //console.log(this.listaSelecao);
    
    let dadosOrcamento = {
     // usuario: this.idUsuario
    usuario: {id: 2}
    }

    this.service.criarOrcamento(dadosOrcamento).subscribe(data => {
      this.orcamento = data
      //console.log(this.orcamento.id);
    })
    for (let i = 0; i< this.listaSelecao.length; i++){
      this.listaIdProdutos = {
        id: this.listaSelecao[i].id
      }
    console.log(this.listaIdProdutos)
  }

  
    
    return this.listaSelecao;
  }


  ngOnDestroy(): void {
    this.inscricaoGetProdutos.unsubscribe;
  }

}