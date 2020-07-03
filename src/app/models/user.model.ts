import { Evento } from './evento.model';

export class User {
    nombre: string;
    apellido: string;
    lugar: string;
    fechaNacimiento: string;
    deporteFav: string;
    email: string;
    password: string;
    eventos?: Evento[];
}