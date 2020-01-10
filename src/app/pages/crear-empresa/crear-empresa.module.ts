import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpresaPageRoutingModule } from './crear-empresa-routing.module';

import { CrearEmpresaPage } from './crear-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEmpresaPageRoutingModule
  ],
  declarations: [CrearEmpresaPage]
})
export class CrearEmpresaPageModule {}
