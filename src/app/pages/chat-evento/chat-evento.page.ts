import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento.model';

@Component({
  selector: 'app-chat-evento',
  templateUrl: './chat-evento.page.html',
  styleUrls: ['./chat-evento.page.scss'],
})
export class ChatEventoPage implements OnInit {

  evento: Evento;

  constructor() { }

  ngOnInit() {
    this.evento = JSON.parse(sessionStorage.getItem('evento'));
    console.log('Evento: ', this.evento);
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('evento')    
  }

}
