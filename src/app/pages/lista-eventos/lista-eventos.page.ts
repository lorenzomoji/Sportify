import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/models/user.model';
import { Evento } from 'src/app/models/evento.model';
import { Router } from '@angular/router';
import { type } from 'os';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: 'lista-eventos.page.html',
  styleUrls: ['lista-eventos.page.scss']
})
export class ListaEventosPage {

  eventos: Evento[] = [];

  constructor(
    private userService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      element => {
        element.forEach(user => {
          if (user.email.toLowerCase() === sessionStorage.getItem('email').toString().toLowerCase()) {
            if (user.eventos) {
              user.eventos.forEach(evento => {
                if (user.eventos.length > this.eventos.length) {
                  if (this.comprobarSiExiste(evento) === false) {
                    this.eventos.push(evento);
                  }
                }
              });
            }
          }
        })
        console.log('Eventos: ', this.eventos);
      }
    );
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

  goChat(evento) {
    sessionStorage.setItem('evento', JSON.stringify(evento));
    this.router.navigateByUrl('/tabs/lista-eventos/chat-evento');
  }

  comprobarSiExiste(evento: Evento) {
    for (let element of this.eventos) {
      if (element.deporte.id === evento.deporte.id && element.fecha === evento.fecha && element.hora === evento.hora &&
          element.lugar === evento.lugar && element.nivel.id === evento.nivel.id && element.participantes === evento.participantes) {
        return true;
      }
    }
    return false;
  }

}
