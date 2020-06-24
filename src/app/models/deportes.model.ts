

export class Deporte {

    id: number;
    nombre: string;

    constructor() {}

}

export class Deportes {

    deportes: Deporte[];

    constructor() {

    }
}

export class Evento {

    id: number;
    deporte: string;
    lugar: string;
    hora: string;
    participantes: number;
    nivel: number;
}