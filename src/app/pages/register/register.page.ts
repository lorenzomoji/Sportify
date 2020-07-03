import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosDeportes, Deporte } from 'src/app/models/deportes.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  deportes: TodosDeportes;

  userForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    lugar: new FormControl(Validators.required),
    fechaNacimiento: new FormControl(Validators.required),
    deporteFav: new FormControl(Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private route: Router,
    private authService: AuthService,
    private userService: UsuariosService
  ) {
    this.userForm.setValue({
      nombre: '',
      apellido: '',
      lugar: '',
      fechaNacimiento: '',
      deporteFav: '',
      email: '',
      password: ''
    });
  }

  ngOnInit() {
    moment.locale('es');
    this.deportes = new TodosDeportes();
  }

  async onRegister(userForm: any) {
    userForm.fechaNacimiento = moment(userForm.fechaNacimiento).format('L');
    const user = await this.authService.onRegister(userForm);
    if (user) {
      console.log("Successfully created user!")
      this.route.navigateByUrl('/');
    }
    this.userService.createUser(userForm);
  }

}
