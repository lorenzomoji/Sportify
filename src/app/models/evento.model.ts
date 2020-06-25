import { Deporte } from './deportes.model';

export class Evento {

    public id: number;
    public deporte: Deporte;
    public fecha: string;
    public hora: string;
    public lugar: string;
    public participantes: number;
    public nivel: number;
    public participantesIn: string[];
    public idUsuario: number[];
}