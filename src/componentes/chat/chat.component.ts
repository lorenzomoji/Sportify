import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Mensaje } from 'src/app/models/mensaje.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {

  mensaje: string;
  usuario: any;

  constructor(
    private chatService: ChatService
  ) {
    this.chatService.cargarMensajes().subscribe();
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }
  
  enviarMensaje() {
    if(this.mensaje.length === 0) {
      return;
    }
    this.chatService.agregarMensaje(this.mensaje, this.usuario.nombre)
      .then(() => this.mensaje = '')
      .catch((error) => console.log('Error al enviar', error));
  }

}
