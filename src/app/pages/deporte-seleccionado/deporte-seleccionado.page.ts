import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deporte-seleccionado',
  templateUrl: './deporte-seleccionado.page.html',
  styleUrls: ['./deporte-seleccionado.page.scss'],
})
export class DeporteSeleccionadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarEvento() {
    this.router.navigateByUrl('tabs/deportes/deporte-seleccionado/buscar-evento');
  }

  crearEvento() {
    this.router.navigateByUrl('tabs/deportes/deporte-seleccionado/crear-evento');
  }

}
