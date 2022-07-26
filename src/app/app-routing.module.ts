import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './pages/adm/adm.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'perfil/:idusuario',
    component: PerfilComponent
  },
  {
    path: 'adm',
    component: AdmComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
