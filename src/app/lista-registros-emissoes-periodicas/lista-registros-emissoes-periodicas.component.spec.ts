import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistrosEmissoesPeriodicasComponent } from './lista-registros-emissoes-periodicas.component';

describe('ListaRegistrosEmissoesPeriodicasComponent', () => {
  let component: ListaRegistrosEmissoesPeriodicasComponent;
  let fixture: ComponentFixture<ListaRegistrosEmissoesPeriodicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistrosEmissoesPeriodicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegistrosEmissoesPeriodicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
