import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ApiConfig } from '../apiConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() controller: string = "";
  @Input() displayedColumnsId: string[] = [];
  @Input() displayedColumnsLegend: string[] = [];
  @Input() RouteRowClick : string = "";

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private http: HttpClient, private router:Router) {  }

  ngOnInit(): void {
    this.http.get(ApiConfig.apiUrl+this.controller).subscribe((dados: any) =>{
      this.dataSource.data = dados
      if (this.paginator){
        this.dataSource.paginator = this.paginator
      }
    });
  }

  delete(id : any){
    this.http.delete(ApiConfig.apiUrl+this.controller+'/'+id).subscribe(response =>{
      const index = this.dataSource.data.findIndex((item: any) => item.id == id);
      if (index !== -1) {
        this.dataSource.data = this.dataSource.data.filter((item:any, idx:any) => idx !== index);
      }
    });
  }

  onRowClick(id : any){
    if (this.RouteRowClick){
      this.router.navigate([this.RouteRowClick+"/"+id]);
    }
  }
}
