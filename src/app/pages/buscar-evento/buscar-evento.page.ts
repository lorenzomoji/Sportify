import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { element } from 'protractor';
import { Evento } from 'src/app/models/evento.model';
import { Deporte } from 'src/app/models/deportes.model';

@Component({
  selector: 'app-buscar-evento',
  templateUrl: './buscar-evento.page.html',
  styleUrls: ['./buscar-evento.page.scss'],
})
export class BuscarEventoPage implements OnInit {

  eventos: any[];
  deporte: Deporte;

  constructor(
    private eventoService: EventosService,
  ) { }

  ngOnInit() {
    this.eventos = [];
    this.deporte = JSON.parse(sessionStorage.getItem('deporte'));
    this.eventoService.getEvents().subscribe(
      element => {
        element.forEach(evento => {
          if (this.deporte.nombre === evento.deporte.nombre) {
            this.eventos.push(evento);
          }
        })
      })
    console.log('Eventos: ', this.eventos);
  }

}
