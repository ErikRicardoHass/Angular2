import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../apiConfig';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  constructor(private http: HttpClient, private route: ActivatedRoute, private router : Router) { }

  empresa = {
    razaoSocial: '',
    cnpj: '',
    incricaoMunicipal: '',
    regimeTributario: '',
    rua : '',
    numero: '',
    cep: '',
    uf: '',
    cidade: '',
    bairro: '',
    complemento: '',
    ibge: '',
    siafi: '',
    cnae: '',
    naturezaJuridica: '',
    ddd: '',
    celular: '',
    email: '',
    id: undefined
  };
  formSubmitted = false;

  ngOnInit(): void {
    // Obtendo o parâmetro da rota
    this.route.params.subscribe(params => {
      this.empresa.id = params['id'];
      this.preencherRegistroExistente();
    });
  }

  preencherRegistroExistente(){
    if (this.empresa.id){
      this.http.get(ApiConfig.apiUrl+"Prestador/"+this.empresa.id).subscribe((prestador: any) =>{
        this.empresa = prestador;
      });
    }
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.validarCamposPreenchidos() && this.validaCNPJ()) {

      if (this.empresa.id){
        this.http.put(ApiConfig.apiUrl+"Prestador", this.empresa).subscribe(response =>{
          this.router.navigate(["/lista-registros-prestador"]);
        });
      }else{
        this.http.post(ApiConfig.apiUrl+"Prestador", this.empresa).subscribe(response =>{
          this.router.navigate(["/lista-registros-prestador"]);
        });
      }
    }
  }

  private validarCamposPreenchidos(){
    return this.empresa.razaoSocial && this.empresa.cnpj
    && this.empresa.cep && this.empresa.rua
    && this.empresa.cidade && this.empresa.uf && this.empresa.bairro && this.empresa.ddd
    && this.empresa.celular && this.empresa.email && this.empresa.regimeTributario && this.empresa.cnae
    && this.empresa.naturezaJuridica
  }

  private validaCNPJ(){
    return this.empresa.cnpj.length == 18
  }

  ajustaCNPJ(){
    if (!this.empresa.cnpj){
      return '';
    }

    this.empresa.cnpj = this.empresa.cnpj.toString().replace(/\D/g, ''); // Remove caracteres não numéricos

    if (this.empresa.cnpj.length > 13) {
      this.empresa.cnpj = this.empresa.cnpj.slice(0, 13);
    }

    this.empresa.cnpj = this.empresa.cnpj.replace(/^(\d{2})(\d)/, '$1.$2');
    this.empresa.cnpj = this.empresa.cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    this.empresa.cnpj = this.empresa.cnpj.replace(/\.(\d{3})(\d)/, '.$1/$2');
    this.empresa.cnpj = this.empresa.cnpj.replace(/(\d{4})(\d)/, '$1-$2');

    return this.empresa.cnpj;
  }

  pesquisaCep(){
    if (this.empresa.cep.length == 8){
      this.http.get(ApiConfig.apiCep+this.empresa.cep+'/json').subscribe((data: any) =>{
        this.empresa.rua = data.logradouro;
        this.empresa.uf = data.uf;
        this.empresa.cidade = data.localidade;
        this.empresa.bairro = data.bairro;
        this.empresa.ibge = data.ibge;
        this.empresa.siafi = data.siafi;
      });
    }
  }
}
