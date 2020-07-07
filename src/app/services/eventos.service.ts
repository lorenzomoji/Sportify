import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Evento } from '../models/evento.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventos: Observable<any[]>;
  private evento: Evento;
  private firestoreCollection: AngularFirestoreCollection<any>;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
    this.firestoreCollection = firestore.collection<any>('eventos');
    this.eventos = this.firestoreCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

  public getEvents() {
    return this.eventos;
  }

  public createEvent(data: Evento) {
    console.log('EVENTO: ', data);
    this.evento = data;
    return this.firestoreCollection.add(data);
  }

  public getEventById(eventoId: string) {
    return this.firestore.collection('eventos').doc(eventoId).snapshotChanges();
  }

  public updateEvent(evento: Evento) {
    console.log('Evento actualizado: ', evento)
    return this.firestoreCollection.doc(evento.id).update(evento);
  }

  // public removeEvent() {
  //   return this.firestore;
  // }


}
