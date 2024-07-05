import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorSNComponent } from './simulador-sn.component';

describe('SimuladorSNComponent', () => {
  let component: SimuladorSNComponent;
  let fixture: ComponentFixture<SimuladorSNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimuladorSNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladorSNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
