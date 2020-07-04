import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, AlertController } from '@ionic/angular';

import { BuscarEventoPageRoutingModule } from './buscar-evento-routing.module';

import { BuscarEventoPage } from './buscar-evento.page';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarEventoPageRoutingModule,
    MatListModule
  ],
  declarations: [BuscarEventoPage],
  providers: [
    AlertController,
    { provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class BuscarEventoPageModule {}
