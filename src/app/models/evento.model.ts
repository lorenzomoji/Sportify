import { Deporte } from './deportes.model';
import { Mensaje } from './mensaje.model';

export class Evento {

    public id?: string;
    public deporte: Deporte;
    public fecha: string;
    public hora: string;
    public lugar: string;
    public participantes: number;
    public nivel: any;
    public participantesIn: string[];
    public idUsuario?: number[];
    public mensaje?: Mensaje[];
}