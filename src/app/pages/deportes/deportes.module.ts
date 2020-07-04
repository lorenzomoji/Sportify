import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeportesComponent } from './deportes.page';
import {MatListModule} from '@angular/material/list';
import { DeportesRoutingModule } from './deportes-routing.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DeportesRoutingModule,
    PipesModule,
    MatListModule
  ],
  declarations: [
    DeportesComponent
  ]
})
export class DeportesModule {}
