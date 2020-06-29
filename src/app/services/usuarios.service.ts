import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private firestoreCollection: AngularFirestoreCollection<any>;
  usuario: User;
  usuarios: Observable<any[]>

  constructor(
    private firestore: AngularFirestore
  ) {
    this.firestoreCollection = firestore.collection<any>('usuarios');
    this.usuarios = this.firestoreCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  public createUser(user: User) {
    this.usuario = user;
    return this.firestoreCollection.add(user);
  }

  public updateUser(usuario: any) {
    return this.firestoreCollection.doc(usuario.id).update(usuario);
  }

  public getUser() {
    return this.usuarios;
  }

}
