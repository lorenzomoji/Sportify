import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.page.html',
  styleUrls: ['./crear-evento.page.scss'],
})
export class CrearEventoPage implements OnInit {

  private evento: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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

}
