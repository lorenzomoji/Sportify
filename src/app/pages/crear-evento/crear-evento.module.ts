import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrearEventoPageRoutingModule } from './crear-evento-routing.module';
import { CrearEventoPage } from './crear-evento.page';
import { MaterialModule } from 'src/app/material.module';
import { MAT_DATE_LOCALE } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEventoPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [CrearEventoPage],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es'}
  ]
})
export class CrearEventoPageModule {}
