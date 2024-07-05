import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroUsuariosComponent } from './lista-registro-usuarios.component';

describe('ListaRegistroUsuariosComponent', () => {
  let component: ListaRegistroUsuariosComponent;
  let fixture: ComponentFixture<ListaRegistroUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistroUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegistroUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
