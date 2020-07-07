import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { Deporte } from 'src/app/models/deportes.model';
import { AlertController, ToastController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'app-buscar-evento',
  templateUrl: './buscar-evento.page.html',
  styleUrls: ['./buscar-evento.page.scss'],
})
export class BuscarEventoPage implements OnInit {

  eventos: any[];
  deporte: Deporte;
  usuario: User;
  cantidadEventos: number;

  constructor(
    private eventoService: EventosService,
    private userService: UsuariosService,
    private fireAuth: AuthService,
    private alert: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.eventos = [];
    this.deporte = JSON.parse(sessionStorage.getItem('deporte'));
    this.userService.getUser().subscribe(
      element => {
        element.forEach(user => {
          if (user.email.toLowerCase() === sessionStorage.getItem('email').toString().toLowerCase()) {
            this.usuario = user;
          }
        })
      }
    );
    this.eventoService.getEvents().subscribe(
      element => {
        element.forEach(evento => {
          if (this.deporte.nombre === evento.deporte.nombre) {
            if (this.cantidadEventos === undefined) {
              console.log(evento);
              this.eventos.push(evento);
            }
          }
        });
        this.cantidadEventos = this.eventos.length;
      });
    console.log('Eventos: ', this.eventos);
  }

  async presentAlert(index) {
    if (!this.eventos[index].participantesIn.includes(sessionStorage.getItem('uid'))) {
      let alert = this.alert.create({
        header: '¿Quieres unirte al evento?',
        buttons: [{
            text: 'Unirme',
            role: 'unirme',
            handler: (result) => {
              this.eventos[index].participantesIn.push(sessionStorage.getItem('uid'));
              if (this.usuario.eventos === undefined) {
                this.usuario.eventos = [];
              }
              this.usuario.eventos.push(this.eventos[index]);
              console.log(this.eventos[index]);
              this.eventoService.updateEvent(this.eventos[index]);
              this.userService.updateUser(this.usuario);
            }
          },
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: (result) => {
            }
          }]
      });
      (await alert).present();
      let result = (await alert).onDidDismiss();
    }  else {
      this.presentToast();
    }
  }

  ordenarEventos(orden) {
    switch (orden) {
      case 'fecha':
        this.eventos.sort(function(a, b) {
          let fechaA = a.fecha.substr(6,4) + a.fecha.substr(3, 2) + a.fecha.substr(0, 2);
          let fechaB = b.fecha.substr(6, 4) + b.fecha.substr(3, 2) + b.fecha.substr(0,2);
          return Number(fechaA) - Number(fechaB);
        });
        break;
      case 'hora':
        this.eventos.sort(function(a, b) {
          let horaA = a.hora.substr(0, 2) + a.hora.substr(3, 2)
          let horaB = b.hora.substr(0, 2) + b.hora.substr(3, 2)
          return horaA - horaB;
        });
        break;
      case 'nivel':
        this.eventos.sort(function(a, b) {
          return a.nivel.id - b.nivel.id; 
        })
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Ya te has unido a este evento',
      duration: 2000,
      color: 'tertiary'
    });
    toast.present();
  }

}
