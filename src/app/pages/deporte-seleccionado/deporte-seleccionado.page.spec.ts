import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeporteSeleccionadoPage } from './deporte-seleccionado.page';

describe('DeporteSeleccionadoPage', () => {
  let component: DeporteSeleccionadoPage;
  let fixture: ComponentFixture<DeporteSeleccionadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeporteSeleccionadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeporteSeleccionadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
