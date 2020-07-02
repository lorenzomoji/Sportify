import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";
import { EventosService } from '../../services/eventos.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  niveles: any[] = [{id: 1, nivel: 'Casual'}, {id: 2, nivel: 'Intermedio'}, {id: 3, nivel: 'Experto'}];
  participantes: number;
  deporte: string;
  eventos = [];
  nivel: any;
  public eventoForm = new FormGroup({
    deporte: new FormControl(''),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    lugar: new FormControl('', Validators.required),
    nivel: new FormControl('', Validators.required),
    participantes: new FormControl(null, Validators.required),
    participantesIn: new FormControl([]),
    id: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private pickerController: PickerController,
    private eventoService: EventosService,
    private router: Router
  ) {
    this.eventoForm.setValue({
      id: '',
      deporte: '',
      fecha: ['', Validators.required],
      hora: [''],
      lugar: [''],
      participantes: [''],
      participantesIn: [],
      nivel: [null, Validators.required]
    });
   }

  ngOnInit() {
    moment.locale('es');
    this.deporte = JSON.parse(sessionStorage.getItem('deporte'));
  }

  async participantesPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            this.nivel = {id: value.numbers.value, nivel: value.numbers.text};
          }
        }
      ],
      columns:[{
        name:'numbers',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.niveles.forEach(x => {
      options.push({text:x.nivel,value:x.id});
    });
    return options;
  }

  crearEvento(form) {
    console.log('Form: ', form);
    let data = {
      deporte: this.deporte,
      fecha: moment(form.fecha).format('L'),
      hora: form.hora,
      lugar: form.lugar,
      participantes: form.participantes,
      participantesIn: [],
      nivel: this.nivel
    };
    this.eventoService.createEvent(data).then(() => {
      console.log('Evento creado exitosamente');
      this.eventoForm.setValue({
        deporte: '',
        fecha: '',
        hora: '',
        lugar: '',
        nivel: '',
        participantes: 0,
        participantesIn: [],
        id: ''
      });
    }, (error) => {
      console.log('Error: ', error);
    });
    this.router.navigateByUrl('/tabs/deportes');
  }

}
