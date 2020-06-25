import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  participantes: number;
  deporte: string;
  eventos = [];
  public eventoForm = new FormGroup({
    deporte: new FormControl(''),
    fecha: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    lugar: new FormControl('', Validators.required),
    nivel: new FormControl(null, Validators.required),
    participantes: new FormControl(null, Validators.required),
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
      nivel: ['']
    });
   }

  ngOnInit() {
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
            this.participantes = value.numbers.value;
            console.log('Participantes: ', this.participantes)
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
    this.numbers.forEach(x => {
      options.push({text:x,value:x});
    });
    console.log('Options: ', options);
    return options;
  }

  crearEvento(form) {
    let data = {
      deporte: this.deporte,
      fecha: form.fecha,
      hora: form.hora,
      lugar: form.lugar,
      participantes: form.participantes,
      nivel: form.nivel
    };
    this.eventoService.createEvent(data).then(() => {
      console.log('Evento creado exitosamente');
      this.eventoForm.setValue({
        deporte: '',
        fecha: '',
        hora: '',
        lugar: '',
        nivel: 0,
        participantes: 0,
        id: ''
      });
    }, (error) => {
      console.log('Error: ', error);
    });
    this.router.navigateByUrl('/tabs/deportes');
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem('deporte');
    sessionStorage.clear();
  }

}
