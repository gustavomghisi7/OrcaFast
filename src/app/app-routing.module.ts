import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
