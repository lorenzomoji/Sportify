import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Mensaje } from 'src/app/models/mensaje.model';
import { Evento } from 'src/app/models/evento.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {

  mensaje: string;
  usuario: any;
  evento: Evento;

  constructor(
    public chatService: ChatService,
    public eventoService: EventosService
  ) {
    this.chatService.cargarMensajes().subscribe();
    this.usuario = JSON.parse(sessionStorage.getItem('usuario'));
  }

  ngOnInit(): void {
    this.evento = JSON.parse(sessionStorage.getItem('evento'));
    this.eventoService.getEvents().subscribe(
      element => {
        element.forEach(evento => {
          if (this.evento.fecha === evento.fecha && this.evento.hora === evento.hora && this.evento.lugar === evento.lugar && this.evento.participantes === evento.participantes) {
            this.evento = evento;
          }
        });
      });
  }
  
  enviarMensaje() {
    if(this.mensaje.length === 0) {
      return;
    }
    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: this.mensaje,
      fecha: new Date().getTime(),
      eventoId: this.evento.id
    }
    if (this.evento.mensaje === undefined) {
      this.evento.mensaje = [];
    }
    this.evento.mensaje.push(mensaje);
    this.eventoService.updateEvent(this.evento);
    this.chatService.agregarMensaje(mensaje)
      .then(() => this.mensaje = '')
      .catch((error) => console.log('Error al enviar', error));
  }


}
