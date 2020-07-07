import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../models/mensaje.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  constructor(
    private firestore: AngularFirestore
  ) { }

  cargarMensajes() {
    this.itemsCollection = this.firestore.collection<Mensaje>('chats', ref => ref.orderBy('fecha', "desc")
                                                                                 .limit(5));

    return this.itemsCollection.valueChanges().pipe(map((mensajes: Mensaje[]) => {
      console.log(mensajes);
      this.chats = [];

      for (let mensaje of mensajes) {
        this.chats.unshift(mensaje);
      }

      return this.chats;
    }))
  }

  agregarMensaje(mensaje: Mensaje) {
    return this.itemsCollection.add(mensaje);
  }

}
