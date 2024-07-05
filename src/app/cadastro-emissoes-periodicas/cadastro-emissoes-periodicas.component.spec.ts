import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmissoesPeriodicasComponent } from './cadastro-emissoes-periodicas.component';

describe('CadastroEmissoesPeriodicasComponent', () => {
  let component: CadastroEmissoesPeriodicasComponent;
  let fixture: ComponentFixture<CadastroEmissoesPeriodicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmissoesPeriodicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmissoesPeriodicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
