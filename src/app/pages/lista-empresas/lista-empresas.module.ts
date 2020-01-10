import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEmpresasPageRoutingModule } from './lista-empresas-routing.module';

import { ListaEmpresasPage } from './lista-empresas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEmpresasPageRoutingModule
  ],
  declarations: [ListaEmpresasPage]
})
export class ListaEmpresasPageModule {}
