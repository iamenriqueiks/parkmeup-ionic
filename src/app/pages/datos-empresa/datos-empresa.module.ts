import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosEmpresaPageRoutingModule } from './datos-empresa-routing.module';

import { DatosEmpresaPage } from './datos-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosEmpresaPageRoutingModule
  ],
  declarations: [DatosEmpresaPage]
})
export class DatosEmpresaPageModule {}
