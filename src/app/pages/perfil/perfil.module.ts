import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilPage } from './perfil.page';

import { PerfilPageRoutingModule } from './perfil-routing.module'
import { MatListModule } from '@angular/material';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PerfilPage }]),
    PerfilPageRoutingModule,
    MatListModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
