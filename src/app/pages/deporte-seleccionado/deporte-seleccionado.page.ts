import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deporte } from 'src/app/models/deportes.model';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-deporte-seleccionado',
  templateUrl: './deporte-seleccionado.page.html',
  styleUrls: ['./deporte-seleccionado.page.scss'],
})
export class DeporteSeleccionadoPage implements OnInit {

  screenHeight: any;
  deporte: Deporte;

  constructor(private router: Router) {
    this.getScreenSize();
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

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
          this.screenHeight = ((window.innerHeight - 20) / 2).toString() + 'px';
          console.log('Height: ', this.screenHeight);
    }
}
