import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deporte } from 'src/app/models/deportes.model';

@Component({
  selector: 'app-deporte-seleccionado',
  templateUrl: './deporte-seleccionado.page.html',
  styleUrls: ['./deporte-seleccionado.page.scss'],
})
export class DeporteSeleccionadoPage implements OnInit {

  screenHeight: any;
  deporte: Deporte;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.deporte = JSON.parse(sessionStorage.getItem('deporte'));
  }

  buscarEvento() {
    this.router.navigateByUrl('tabs/deportes/deporte-seleccionado/buscar-evento');
  }

  crearEvento() {
    this.router.navigateByUrl('tabs/deportes/deporte-seleccionado/crear-evento');
  }

}
