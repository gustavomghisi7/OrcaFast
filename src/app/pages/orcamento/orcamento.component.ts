import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  constructor(private service: ProdutosService, private route: ActivatedRoute) { }

  inscricaoGet: any = Subscription;

  ngOnInit(): void {
    this.mostrarSelecao();
  }

  selecao: any = [];
  mostrarSelecao(): void {
    this.inscricaoGet = this.service.mostrarOrcamento().subscribe(data => {
      this.selecao = data;
      console.log(this.selecao);
    })
  }

}
