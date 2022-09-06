import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
  }

  mostrarorcamento()

}
