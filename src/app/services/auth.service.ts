import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from './../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: any = false;

  constructor(public angularFireAuth: AngularFireAuth) {

    angularFireAuth.authState.subscribe(user => (this.isLogged = user));

  }

  //Login
  async onLogin(user: User) {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en login user', error)
    }
  }

  //Register
  async onRegister(user: User) {
    console.log('User: ', user);
    try {
      return await this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password)
    } catch (error) {
      console.log('Error on register user', error)
    }
  }

}
