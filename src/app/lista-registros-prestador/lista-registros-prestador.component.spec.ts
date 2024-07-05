import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistrosPrestadorComponent } from './lista-registros-prestador.component';

describe('ListaRegistrosPrestadorComponent', () => {
  let component: ListaRegistrosPrestadorComponent;
  let fixture: ComponentFixture<ListaRegistrosPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistrosPrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRegistrosPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
