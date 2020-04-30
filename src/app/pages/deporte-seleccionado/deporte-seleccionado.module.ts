import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeporteSeleccionadoPageRoutingModule } from './deporte-seleccionado-routing.module';

import { DeporteSeleccionadoPage } from './deporte-seleccionado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeporteSeleccionadoPageRoutingModule
  ],
  declarations: [DeporteSeleccionadoPage]
})
export class DeporteSeleccionadoPageModule {}
