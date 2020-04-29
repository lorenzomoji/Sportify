import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaDeportes',
  templateUrl: './listaDeportes.component.html',
  styleUrls: ['./listaDeportes.component.scss'],
})
export class ListaDeportesComponent implements OnInit {

  deportes: string[] = ['Fútbol', 'Tenis', 'Baloncesto', 'Balonmano', 'Ciclismo', 'Voleyball', 'Rugby', 'Badminton', 'Padel', 'Surf',
  'Skate', 'Tenis de mesa', 'Running', 'Gimnasio', 'Parkour', 'Escalada'];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  deporteSeleccionado(deporte) {
    this.router.navigateByUrl('');
  }

}
