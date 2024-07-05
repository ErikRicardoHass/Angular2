import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiConfig } from '../apiConfig';

@Component({
  selector: 'app-lista-registro-usuarios',
  templateUrl: './lista-registro-usuarios.component.html',
  styleUrls: ['./lista-registro-usuarios.component.css']
})
export class ListaRegistroUsuariosComponent {
  displayedColumns: string[] = ['Id', 'userName', 'trash'];
  //dataSource : any;
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private http: HttpClient) {
    http.get(ApiConfig.apiUrl+"Usuarios").subscribe((usuarios: any) =>{
      //this.dataSource = usuarios;
      this.dataSource.data = usuarios
      if (this.paginator){
        this.dataSource.paginator = this.paginator
      }
    });
  }

  delete(id : any)
  {
    this.http.delete(ApiConfig.apiUrl+"Usuarios"+id).subscribe(response =>{
      const index = this.dataSource.data.findIndex((item: any) => item.id == id);
      if (index !== -1) {
        this.dataSource.data = this.dataSource.data.filter((item:any, idx:any) => idx !== index);
      }
    });
  }
}

export interface Usuario {
  userName: string;
  password: string;
}

const ELEMENT_DATA: Usuario[] = [
  { userName: 'usuario1', password: 'senha1' },
  { userName: 'usuario2', password: 'senha2' },
  { userName: 'usuario3', password: 'senha3' }
];
