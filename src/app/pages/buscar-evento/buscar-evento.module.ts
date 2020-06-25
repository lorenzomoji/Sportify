import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, AlertController } from '@ionic/angular';

import { BuscarEventoPageRoutingModule } from './buscar-evento-routing.module';

import { BuscarEventoPage } from './buscar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarEventoPageRoutingModule
  ],
  declarations: [BuscarEventoPage],
  providers: [
    AlertController
  ]
})
export class BuscarEventoPageModule {}
