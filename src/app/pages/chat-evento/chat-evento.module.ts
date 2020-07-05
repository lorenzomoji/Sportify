import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatEventoPageRoutingModule } from './chat-evento-routing.module';

import { ChatEventoPage } from './chat-evento.page';
import { ChatComponent } from 'src/componentes/chat/chat.component';
import { ChatService } from 'src/app/services/chat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatEventoPageRoutingModule
  ],
  declarations: [
    ChatEventoPage,
    ChatComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatEventoPageModule {}
