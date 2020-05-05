import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-evento',
  templateUrl: './buscar-evento.page.html',
  styleUrls: ['./buscar-evento.page.scss'],
})
export class BuscarEventoPage implements OnInit {

  eventos = [{id: 1, participantes: '1/6', lugar: 'Son Moix', hora: '16:00'},
            {id: 2, participantes: '2/4', lugar: 'La Salle', hora: '10:00'},
            {id: 3, participantes: '5/6', lugar: 'Cide', hora: '20:00'},
            {id: 4, participantes: '1/6', lugar: 'Palma Pádel', hora: '15:00'},
            {id: 5, participantes: '3/4', lugar: 'Pistas Pádel', hora: '19:00'}
            ]

  constructor() { }

  ngOnInit() {
  }

}
