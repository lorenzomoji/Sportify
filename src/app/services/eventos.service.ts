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

  public createEvent(data: {fecha: string, hora: string, lugar: string, nivel: number, participantes: number}) {
    console.log('EVENTO: ', data);
    return this.firestoreCollection.add(data);
  }

  public getEventById(eventoId: string) {
    return this.firestore.collection('eventos').doc(eventoId).snapshotChanges();
  }

  public updateEvent(evento: any) {
    let userUid = sessionStorage.getItem('uid');
    return this.firestoreCollection.doc(userUid).update(evento);
  }

  // public removeEvent() {
  //   return this.firestore;
  // }


}
