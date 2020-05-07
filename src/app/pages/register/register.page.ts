import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(
    private route: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  async onRegister() {
    const user = await this.authService.onRegister(this.user);
    if (user) {
      console.log("Successfully created user!")
      this.route.navigateByUrl('/');
    }
  }

}
