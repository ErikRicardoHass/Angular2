import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../apiConfig';

@Component({
  selector: 'app-lista-registros-prestador',
  templateUrl: './lista-registros-prestador.component.html',
  styleUrls: ['./lista-registros-prestador.component.css']
})
export class ListaRegistrosPrestadorComponent {
  displayedColumns: string[] = ['razaoSocial', 'cnpj', 'inscricaoMunicipal', 'cnae', 'trash'];
  dataSource: any;

  constructor(private http: HttpClient) {

    http.get(ApiConfig.apiUrl+"Prestador").subscribe(prestadores =>{
      this.dataSource = prestadores;
    });
   }

  delete(id : any)
  {
    this.http.delete(ApiConfig.apiUrl+"Prestador"+id).subscribe(response =>{
      const index = this.dataSource.data.findIndex((item: any) => item.id == id);
      if (index !== -1) {
        this.dataSource.data = this.dataSource.data.filter((item:any, idx:any) => idx !== index);
      }
    });
  }
}
export interface PeriodicElement {
  razaoSocial: String;
  cnpj: string;
  inscricaoMunicipal: string;
  cnae: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {razaoSocial: 'Empresa teste 1', cnpj: '17.737.742/0001-05', inscricaoMunicipal: '12345678', cnae: '620-1/00'},
  {razaoSocial: 'Empresa teste 1', cnpj: '48.239.374/0001-90', inscricaoMunicipal: '12345678', cnae: '620-1/00'},
  {razaoSocial: 'Empresa teste 1', cnpj: '78.123.990/0001-42', inscricaoMunicipal: '12345678', cnae: '620-1/00'},
];
