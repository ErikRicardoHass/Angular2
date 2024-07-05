import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiConfig } from '../apiConfig';

@Component({
  selector: 'app-simulador-sn',
  templateUrl: './simulador-sn.component.html',
  styleUrls: ['./simulador-sn.component.css']
})

export class SimuladorSNComponent{

  formSubmitted = false;
  dadosFaturamento: dadosFaturamentoMock[] = [];
  rbt12: Number = 0;

  constructor(private http: HttpClient, private router: Router) {

  }

  simular(){

  }

  calcularRbt12(){
    this.rbt12 = this.dadosFaturamento.reduce((acc, curr) => acc + curr.valor, 0);
  }

  add(){
    this.dadosFaturamento.push({id: this.dadosFaturamento.length, data: new Date(), valor: 0})
  }
}

interface dadosFaturamentoMock{
  id: Number,
  data: Date,
  valor: number
}
