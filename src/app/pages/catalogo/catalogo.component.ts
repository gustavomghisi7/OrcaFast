import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  todosProdutos: any = [];
  orcamento: any = {};

  listaIdProdutos: any = {};
  listaSelecao: any = {};

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  inscricaoGetProdutos: any = Subscription;

  ngOnInit(): void {
    this.pegarTodosOsProdutos();
  }

  pegarTodosOsProdutos(): void {
    this.inscricaoGetProdutos = this.service
      .getProdutos()
      .subscribe((data) => {
        this.produtos = data
        this.todosProdutos = data
      }
      )
  }

  procurarProdutos(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.produtos = this.todosProdutos.filter((produto: any) => {
      return produto.descricaop.toLowerCase().includes(value);
    });
  }

  selecionarItem(item: any) {
    // const produto = this.produtos.find((prod: any) => prod.id == item.id);
    // produto.selecionado = !(produto.selecionado ?? false);
    item.selecionado = !(item.selecionado || false);
    this.listaSelecao = this.produtos.filter((prod: any) => prod.selecionado);
  }

  criarOrcamento() {
    const routeParams = this.route.snapshot.paramMap;
    this.idUsuario = Number(routeParams.get('idusuario'));

    let dadosOrcamento = {
      usuario: { id: this.idUsuario },
    };

    this.service.criarOrcamento(dadosOrcamento).subscribe((data: any) => {
      this.orcamento = data
      this.salvarSelecao()
      this.router.navigate([`/orcamento/${data.id}/${this.idUsuario}`]);
    });

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
        preco: 0,
        produto: {
          categoria: {
            id: this.listaSelecao[i].categoria.id,
          },
          id: this.listaSelecao[i].id,

        },
        quantidade: this.listaSelecao[i].quantidade

      };

      this.service.salvarSelecao(this.objetoSelecao).subscribe((data) => {
        this.objetoSelecao = data;
      });
    }
  }

  ngOnDestroy(): void {
    this.inscricaoGetProdutos.unsubscribe;

  }
}
