import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosEmpresaPage } from './datos-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: DatosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosEmpresaPageRoutingModule {}
