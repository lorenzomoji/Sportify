import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { element } from 'protractor';
import { Evento } from 'src/app/models/evento.model';
import { Deporte } from 'src/app/models/deportes.model';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-buscar-evento',
  templateUrl: './buscar-evento.page.html',
  styleUrls: ['./buscar-evento.page.scss'],
})
export class BuscarEventoPage implements OnInit {

  eventos: any[];
  deporte: Deporte;
  usuario: User;

  constructor(
    private eventoService: EventosService,
    private userService: UsuariosService,
    private fireAuth: AuthService,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.eventos = [];
    this.deporte = JSON.parse(sessionStorage.getItem('deporte'));
    this.userService.getUser().subscribe(
      element => {
        element.forEach(user => {
          if (user.email === sessionStorage.getItem('email').toString()) {
            this.usuario = user;
          }
        })
      }
    );
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
            if (this.usuario.eventos === undefined) {
              this.usuario.eventos = [];
            }
            this.usuario.eventos.push(this.eventos[index]);
            this.eventoService.updateEvent(this.eventos[index]);
            this.userService.updateUser(this.usuario);
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
