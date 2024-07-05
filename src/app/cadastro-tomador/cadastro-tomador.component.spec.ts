import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTomadorComponent } from './cadastro-tomador.component';

describe('CadastroTomadorComponent', () => {
  let component: CadastroTomadorComponent;
  let fixture: ComponentFixture<CadastroTomadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTomadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTomadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
