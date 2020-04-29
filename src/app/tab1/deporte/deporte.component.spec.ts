import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeporteComponent } from './deporte.component';

describe('DeporteComponent', () => {
  let component: DeporteComponent;
  let fixture: ComponentFixture<DeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeporteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
