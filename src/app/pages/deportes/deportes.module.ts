import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeportesComponent } from './deportes.page';

import { DeportesRoutingModule } from './deportes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DeportesRoutingModule,
  ],
  declarations: [
    DeportesComponent
  ]
})
export class DeportesModule {}
