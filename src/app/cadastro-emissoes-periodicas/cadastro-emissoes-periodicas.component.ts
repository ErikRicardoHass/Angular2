import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../apiConfig';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-emissoes-periodicas',
  templateUrl: './cadastro-emissoes-periodicas.component.html',
  styleUrls: ['./cadastro-emissoes-periodicas.component.css']
})
export class CadastroEmissoesPeriodicasComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute, private router : Router) { }

  formSubmitted = false;

  emissaoPeriodica = {
    id: undefined,
    prestador: '',
    tomador: ''
  };

  ngOnInit(): void {
    // Obtendo o parâmetro da rota
    // this.route.params.subscribe(params => {
    //   this.empresa.id = params['id'];
    //   this.preencherRegistroExistente();
    // });
  }
  submitForm(){
    alert(this.emissaoPeriodica.prestador);
  }

  onValueChangePrestador(event: any){
    this.emissaoPeriodica.prestador = event;
  }

  onValueChangeTomador(event: any){
    this.emissaoPeriodica.tomador = event;
  }
}
