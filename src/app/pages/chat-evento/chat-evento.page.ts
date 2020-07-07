import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento.model';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-chat-evento',
  templateUrl: './chat-evento.page.html',
  styleUrls: ['./chat-evento.page.scss'],
})
export class ChatEventoPage implements OnInit {

  evento: Evento;

  constructor(
    private eventoService: EventosService
  ) { }

  ngOnInit() {
    this.evento = JSON.parse(sessionStorage.getItem('evento'));
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('evento')    
  }

}
