import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { element } from 'protractor';
import { Evento } from 'src/app/models/evento.model';
import { Deporte } from 'src/app/models/deportes.model';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

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
    private alert: AlertController
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
        });
      });
    console.log('Eventos: ', this.eventos);
  }

  async presentAlert(index) {
    let alert = this.alert.create({
      header: '¿Quieres unirte al evento?',
      buttons: [{
          text: 'Unirme',
          role: 'unirme',
          handler: (result) => {
            this.eventos[index].participantesIn.push(sessionStorage.getItem('uid'));
            this.eventoService.updateEvent(this.eventos[index]);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancelar',
          handler: (result) => {
            console.log('Result: ', result);
          }
        }]
    });
    (await alert).present();
    let result = (await alert).onDidDismiss();
    console.log('Result: ', result);
  }

}
