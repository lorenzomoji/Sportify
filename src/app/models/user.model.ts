import { Evento } from './evento.model';

export class User {
    email: string;
    password: string;
    eventos?: Evento[];
}