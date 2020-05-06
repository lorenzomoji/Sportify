import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  private evento: FormGroup;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  participantes: number;

  constructor(
    private formBuilder: FormBuilder,
    private pickerController: PickerController
  ) {
    this.evento = this.formBuilder.group({
      fecha: ['', Validators.required],
      hora: [''],
      lugar: [''],
      participantes: [''],
      nivel: ['']
    });
   }

  ngOnInit() {
  }

  logForm() {
    console.log(this.evento.value)
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
    console.log('Options: ', options)
    return options;
  }

}
