import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListaEventosRoutingModule } from './lista-eventos-routing.module';
import { ListaEventosPage } from './lista-eventos.page';
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ListaEventosRoutingModule,
    MatListModule
  ],
  declarations: [ListaEventosPage]
})
export class ListaEventosPageModule {}
