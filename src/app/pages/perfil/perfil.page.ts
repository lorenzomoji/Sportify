import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Evento } from 'src/app/models/evento.model';
import * as moment from 'moment';
import { element } from 'protractor';

@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.page.html',
  styleUrls: ['perfil.page.scss']
})
export class PerfilPage {

  user: any;
  eventosPasados: Evento[] = [];

  constructor(
    private userService: UsuariosService
  ) {}

  ngOnInit(): void {
    moment.locale('es');
    this.userService.getUser().subscribe(
      element => {
        this.user = element;
        element.forEach(user => {
          if (user.email === sessionStorage.getItem('email').toString()) {
            this.user = user;
            if (user.eventos) {
              user.eventos.forEach(evento => {
                let diaActualTransformado = moment(new Date()).format('L');
                let diaActual = diaActualTransformado.substr(6, 4) + diaActualTransformado.substr(3, 2) + diaActualTransformado.substr(0, 2);
                let diaEvento = evento.fecha.substr(6, 4) + evento.fecha.substr(3, 2) + evento.fecha.substr(0, 2);
                if (Number(diaActual) > Number(diaEvento)) {
                  this.eventosPasados.push(evento);
                }
              });
            }
          }
        })
      });
      console.log(this.eventosPasados)
  }

  nombrarIcono(deporte) {
    switch(deporte) {
      case 'Fútbol':
        return 'football-outline';
      case 'Tenis':
        return 'tennisball-outline';
      case 'Baloncesto':
        return 'basketball-outline';
      case 'Balonmano':
        return 'hand-left-outline';
      case 'Ciclismo':
        return 'bicycle-outline';
      case 'Voleyball':
        return '';
      case 'Rugby':
        return 'american-football-outline';
      case 'Badminton':
        return '';
      case 'Padel':
        return '';
      case 'Surf':
        return '';
      case 'Skate':
        return '';
      case 'Tenis de mesa':
        return '';
      case 'Running':
        return 'walk-outline';
      case 'Gimnasio':
        return 'barbell-outline';
      case 'Parkour':
        return '';
      case 'Escalada':
        return "analytics-outline";
    }
  }

  cargandoDatos(event) {
    console.log('Event: ', event);
    return false;
  }

}
