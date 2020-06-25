import { Deporte } from './deportes.model';

export class Evento {

    public id: number;
    public deporte: Deporte;
    public lugar: string;
    public hora: string;
    public participantes: number;
    public nivel: number;
    public idUsuario: number[];
}