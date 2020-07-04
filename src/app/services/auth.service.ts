import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from './../models/user.model'
import { pipe } from 'rxjs';
import { element } from 'protractor';

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
    this.getUid();
    try {
      this.angularFireAuth.authState.subscribe(element => {
        if (element) {
          JSON.stringify(sessionStorage.setItem('email', element.email))
        }
      })
      return await this.angularFireAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en login user', error);
    }
  }

  async onLogout() {
    this.angularFireAuth.signOut().then(function() {
      console.log('Deslogueado correctamente')
    }).catch(function(error) {
      console.log('Error: ', error);
    })
  }

  //Register
  async onRegister(user: User) {
    try {
      return await this.angularFireAuth.createUserWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error on register user', error);
    }
  }

  public getUid() {
    console.log('FireAuth: ', this.angularFireAuth.authState.subscribe(result => {
      if (result) {
        sessionStorage.setItem('uid', result.uid);
      }
    }));
  }

}
