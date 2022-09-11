import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsuariosService } from 'src/app/services/usuarios.service';

declare const M: any

@Component({
  selector: 'app-perfil-fornecedor',
  templateUrl: './perfil-fornecedor.component.html',
  styleUrls: ['./perfil-fornecedor.component.css']
})
export class PerfilFornecedorComponent implements OnInit {
  idFornecedor: number = 0
  fornecedor: any = {}
  razaosocial: string = ''
  cnpj: string = ''
  email: string = ''
  telefone: string = ''


  constructor(private service: UsuariosService, private route: ActivatedRoute) { }
  
  inscricaoGetUmFornecedor: any = Subscription;
  
  ngOnInit(): void {
    
    M.updateTextFields()
    M.AutoInit()
    const routeParams = this.route.snapshot.paramMap;
    
    this.idFornecedor = Number(routeParams.get('idfornecedor'))
    this.inscricaoGetUmFornecedor = this.service.getUmFornecedor(this.idFornecedor).subscribe(data => {
      this.fornecedor = data
  })}

  
  ngOnDestroy(): void{
    this.inscricaoGetUmFornecedor.unsubscribe;

  }
}
