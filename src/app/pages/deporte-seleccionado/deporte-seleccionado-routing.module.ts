import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeporteSeleccionadoPage } from './deporte-seleccionado.page';

const routes: Routes = [
  {
    path: '',
    component: DeporteSeleccionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeporteSeleccionadoPageRoutingModule {}
