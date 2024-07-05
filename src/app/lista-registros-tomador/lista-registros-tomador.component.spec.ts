import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistrosTomadorComponent } from './lista-registros-tomador.component';

describe('ListaRegistrosTomadorComponent', () => {
  let component: ListaRegistrosTomadorComponent;
  let fixture: ComponentFixture<ListaRegistrosTomadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistrosTomadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegistrosTomadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
