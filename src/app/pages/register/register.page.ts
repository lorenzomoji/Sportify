import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    eventos: new FormControl([])
  })

  constructor(
    private route: Router,
    private authService: AuthService,
    private userService: UsuariosService
  ) {
    this.userForm.setValue({
      email: '',
      password: '',
      eventos: []
    });
  }

  ngOnInit() {
  }

  async onRegister(userForm: any) {
    console.log('User Form: ', userForm);
    const user = await this.authService.onRegister(userForm);
    if (user) {
      console.log("Successfully created user!")
      this.route.navigateByUrl('/');
    }
    this.userService.createUser(userForm);
  }

}
