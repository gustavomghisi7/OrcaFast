import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    const routeParams = this.route.snapshot.paramMap;
    const idOrcamento = Number(routeParams.get('idorcamento'));
    this.mostrarOrcamentoById(idOrcamento);

  }

  selecao: any = [];
  mostrarOrcamentoById(idOrcamento: number): void {
    this.inscricaoGet = this.service.mostrarOrcamentoById(idOrcamento).subscribe(data => {
      this.selecao = data;
      console.log(data)
    })
    
  }

  ngOnDestroy(): void {
    this.inscricaoGet.unsubscribe;

  }
}
