import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEmpresasPage } from './lista-empresas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEmpresasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEmpresasPageRoutingModule {}
