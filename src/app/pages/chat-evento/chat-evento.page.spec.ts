import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatEventoPage } from './chat-evento.page';

describe('ChatEventoPage', () => {
  let component: ChatEventoPage;
  let fixture: ComponentFixture<ChatEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
