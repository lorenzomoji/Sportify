import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatEventoPage } from './chat-evento.page';

const routes: Routes = [
  {
    path: '',
    component: ChatEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatEventoPageRoutingModule {}
