import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  async onLogin(login) {
    this.user.email = login.email;
    this.user.password = login.password;
    const user = await this.authService.onLogin(this.user);
    if (user) {
      console.log('Successfully logged in!');
      this.route.navigateByUrl('/');
    }
  }

}
