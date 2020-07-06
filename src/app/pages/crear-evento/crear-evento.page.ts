import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PickerController, ToastController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";
import { EventosService } from '../../services/eventos.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DateAdapter } from '@angular/material';

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
  dateFilter = (d: Date) => {
    let day;
    let dia = moment(d).format('L').substr(6, 4) + moment(d).format('L').substr(3, 2) +moment(d).format('L').substr(0, 2);
    let diaActual = moment(new Date()).format('L').substr(6, 4) + moment(new Date()).format('L').substr(3, 2) + moment(new Date()).format('L').substr(0, 2);
    if (Number(dia) > Number(diaActual)) {
      day = (d || new Date()).getDay()
    }
    return day || day === 0;
  }

  constructor(
    private formBuilder: FormBuilder,
    private pickerController: PickerController,
    private eventoService: EventosService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.eventoForm.setValue({
      id: '',
      deporte: '',
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      lugar: [''],
      participantes: ['', Validators.required],
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
      participantesIn: [sessionStorage.getItem('uid')],
      nivel: this.nivel
    };
    if (!form.fecha || !form.hora || !form.lugar || !form.participantes) {
      this.presentToast('Complete todos los campos', 'danger');
    }
    this.eventoService.createEvent(data).then(() => {
      console.log('Evento creado exitosamente');
      this.presentToast('Evento creado correctamente', 'success');
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

  async presentToast(mensaje, tipoMensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: tipoMensaje
    });
    toast.present();
  }

}
