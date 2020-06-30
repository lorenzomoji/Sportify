import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { User } from 'src/app/models/user.model';
import { Evento } from 'src/app/models/evento.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  eventos: Evento[] = [];

  constructor(
    private userService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      element => {
        element.forEach(user => {
          if (user.email === sessionStorage.getItem('email').toString()) {
            user.eventos.forEach(evento => {
              this.eventos.push(evento);
            });
          }
        })
      }
    );
    console.log('Eventos: ', this.eventos);
  }

}
