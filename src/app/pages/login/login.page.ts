import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private route: Router,
    private authService: AuthService,
    private toastController: ToastController,
    private userService: UsuariosService
  ) { }

  ngOnInit() {
  }

  async onLogin(login) {
    this.user.email = login.email;
    this.user.password = login.password;
    const user = await this.authService.onLogin(this.user);
    if (user) {
      this.route.navigateByUrl('/');
    } else {
      this.presentToast();
    }

    this.userService.getUser().subscribe(
      element => {
        element.forEach(user => {
          if (user.email.toLowerCase() === sessionStorage.getItem('email').toString().toLowerCase()) {
            console.log('User: ', user);
            sessionStorage.setItem('usuario', JSON.stringify(user));
          }
        })
      }
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Email o contraseña erróneos',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

}
