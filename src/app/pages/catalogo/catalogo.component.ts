import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  idUsuario: number = 0;
  produtos: any = [];
  orcamento: any = {};

  listaIdProdutos: any = {};
  listaSelecao: any = {};

  quantidade: any = [];

  objetoSelecao: any = {
    orcamento: {
      id: 0,
      usuario: {
        id: 0,
      },
    },
    preco: 0,
    produto: {
      categoria: {
        id: 0,
      },
      id: 0,
    },
    quantidade: 0,
  };

  constructor(
    private service: ProdutosService,
    private route: ActivatedRoute
  ) {}

  inscricaoGetProdutos: any = Subscription;

  ngOnInit(): void {
    this.pegarTodosOsProdutos();
  }

  pegarTodosOsProdutos(): void {
    this.inscricaoGetProdutos = this.service
      .getProdutos()
      .subscribe((data) => (this.produtos = data));
  }

  selecionarItem(item: any) {
    const produto = this.produtos.find((prod: any) => prod.id == item.id);
    produto.selecionado = !(produto.selecionado || false);
    this.listaSelecao = this.produtos.filter((prod: any) => prod.selecionado);
  }

  criarOrcamento() {
    const routeParams = this.route.snapshot.paramMap;
    this.idUsuario = Number(routeParams.get('idusuario'));

    let dadosOrcamento = {
      usuario: { id: this.idUsuario },
    };

    this.service.criarOrcamento(dadosOrcamento).subscribe((data) => {
      this.orcamento = data
      this.salvarSelecao()
    });

    console.log(this.quantidade)
  }

  salvarSelecao() {

    for (let i = 0; i < this.listaSelecao.length; i++) {
      this.objetoSelecao = {
        orcamento: {
          id: this.orcamento.id,
          usuario: {
            id: this.idUsuario,
          },
        },
        preco: 2,
        produto: {
          categoria: {
            id: this.listaSelecao[i].categoria.id,
          },
          id: this.listaSelecao[i].id,
        },
        quantidade: this.quantidade[i],
      };

      this.service.salvarSelecao(this.objetoSelecao).subscribe((data) => {
        this.objetoSelecao = data;
        console.log(data);
      });
    }
  }

  alterar(evento: any): void{
    this.quantidade.push(evento.target.value)
   // this.quantidade = evento.target.value
  }

  ngOnDestroy(): void {
    this.inscricaoGetProdutos.unsubscribe;
  }
}


// // pega a quantidade de produtos passada no input

// this.quantidade = Number(
//   (<HTMLInputElement>document.getElementById('quantidade')).value
// );

// console.log(this.quantidade);
