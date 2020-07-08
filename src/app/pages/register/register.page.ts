import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosDeportes, Deporte } from 'src/app/models/deportes.model';
import { element } from 'protractor';
import { ToastController } from '@ionic/angular';
import provincias from '../../../assets/espana-municipios.json';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  deportes: TodosDeportes;
  emails: string[] = [];
  emailUsado: boolean;
  provincias: any;

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
    private userService: UsuariosService,
    private toastController: ToastController
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
    this.provincias = provincias;
    console.log(this.provincias);
    moment.locale('es');
    this.deportes = new TodosDeportes();
    this.userService.getUser().subscribe(element => {
      element.forEach(usuario => {
        this.emails.push(usuario.email);
      })
    })
  }

  async onRegister(userForm: any) {
    userForm.fechaNacimiento = moment(userForm.fechaNacimiento).format('L');
    const user = await this.authService.onRegister(userForm);
    if (user) {
      console.log("Successfully created user!")
      this.route.navigateByUrl('/');
      this.userService.createUser(userForm);
    } else {
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Este email ya está en uso',
      duration: 2000,
    });
    toast.present();
  }

}
