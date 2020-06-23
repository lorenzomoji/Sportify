import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/evento.model';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  participantes: number;
  eventos = [];
  public eventoForm = new FormGroup({
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
    private eventoService: EventosService
  ) {
    this.eventoForm.setValue({
      id: '',
      fecha: ['', Validators.required],
      hora: [''],
      lugar: [''],
      participantes: [''],
      nivel: ['']
    });
   }

  ngOnInit() {
    // this.eventoService.getEvents().subscribe((
    //   results => {
    //     this.eventos = [];
    //     results.forEach((element) => {
    //       this.eventos.push({
    //         id: element.payload.doc.id,
    //         data: element.payload.doc.data()
    //       });
    //     });
    //     console.log('Eventos: ', this.eventos);
    //   }
    // ));
    this.eventoService.getEvents().subscribe((
      results => {
        console.log('Results: ', results);
      }
    ));
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
      fecha: form.fecha,
      hora: form.hora,
      lugar: form.lugar,
      participantes: form.participantes,
      nivel: form.nivel
    };
    console.log('Data: ', data);
    this.eventoService.createEvent(data).then(() => {
      console.log('Evento creado exitosamente');
      this.eventoForm.setValue({
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
  }

}
