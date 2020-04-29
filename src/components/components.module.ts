import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeportesComponent } from './listaDeportes/listaDeportes.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ListaDeportesComponent
  ],
  exports: [
    ListaDeportesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
