import { IProduto, IProdutoFornecedor } from './../../types';
import { ISelecao } from 'src/app/types';
import { UsuariosService } from '../../services/usuarios.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import * as XLSX from 'xlsx';
import { Subscription } from 'rxjs';

declare const M: any

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css'],
})
export class OrcamentoComponent implements OnInit {
  idUsuario: number = 0
  usuario: any = {}

  constructor(
    private serviceUsuario: UsuariosService,
    private service: ProdutosService,
    private route: ActivatedRoute
  ) { }

  inscricaoGetUmUsuario: any = Subscription;
  inscricaoGet: any = Subscription;
  fileName = 'orcamentoExcel.xlsx';

  ngOnInit(): void {

    M.updateTextFields()

    M.AutoInit()

    const routeParams = this.route.snapshot.paramMap;
    const idOrcamento = Number(routeParams.get('idorcamento'));
    this.mostrarOrcamentoById(idOrcamento);

    this.idUsuario = Number(routeParams.get('idusuario'))
    this.inscricaoGetUmUsuario = this.serviceUsuario.getUmUsuario(this.idUsuario).subscribe(data => {
      this.usuario = data
    })
  }

  selecao: ISelecao[] = [];
  selecaoExportar: ISelecao[] = [];
  mostrarOrcamentoById(idOrcamento: number): void {
    this.inscricaoGet = this.service
      .mostrarOrcamentoById(idOrcamento)
      .subscribe((data) => {
        this.selecao = data;

        this.selecaoExportar = data.flatMap((item: ISelecao) => {
          const novaListaProdutoFornecedor = item.produtoFornecedor.map(
            (prodForn: IProdutoFornecedor) => ({
              ...item,
              ...prodForn,
              quantidade: item.quantidade,
            })
          );
          return novaListaProdutoFornecedor;
        });
      });
  }

  exportarexcel(): void {
    let elementoTable = document.getElementById('excel_table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(elementoTable);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  ngOnDestroy(): void {
    this.inscricaoGet.unsubscribe;
  }
}
