import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Deporte } from 'src/app/models/deportes.model';

@Component({
  selector: 'deportes',
  templateUrl: 'deportes.page.html',
  styleUrls: ['deportes.page.scss']
})
export class DeportesComponent {

  deportes: Deporte[] = [{id: 1, nombre: 'Fútbol'}, {id: 2, nombre: 'Tenis'}, {id: 3, nombre: 'Baloncesto'}, {id: 4, nombre: 'Balonmano'}, {id: 5, nombre: 'Ciclismo'},
  {id: 6, nombre: 'Voleyball'}, {id: 7, nombre: 'Rugby'}, {id: 8, nombre: 'Badminton'}, {id: 9, nombre: 'Padel'}, {id: 10, nombre: 'Surf'},
  {id: 11, nombre: 'Skate'}, {id: 12, nombre: 'Tenis de mesa'}, {id: 13, nombre: 'Running'}, {id: 14, nombre: 'Gimnasio'},
  {id: 15, nombre: 'Parkour'}, {id: 16, nombre: 'Escalada'}];
  textoBuscar = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  //Se pondra el id del deporte para que la busqueda solo sea por ese deporte en concreto
  deporteSeleccionado(deporte) {
    sessionStorage.setItem('deporte', JSON.stringify(deporte));
    this.router.navigateByUrl('/tabs/deportes/deporte-seleccionado');
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

}
