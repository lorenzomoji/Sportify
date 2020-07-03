import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEventosPage } from './lista-eventos.page';

describe('ListaEventosPage', () => {
  let component: ListaEventosPage;
  let fixture: ComponentFixture<ListaEventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEventosPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
