import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearEmpresaPage } from './crear-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearEmpresaPageRoutingModule {}
