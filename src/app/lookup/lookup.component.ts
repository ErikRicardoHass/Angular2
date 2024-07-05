import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../apiConfig';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit{

  @Input() formSubmitted : boolean = false;
  @Input() condicao : boolean = false;
  @Input() value : string = '';
  @Input() required : boolean = false;
  @Input() name : string = '';
  @Input() controller : string = '';
  @Input() class : string = 'full-width';
  @Input() title : string = '';
  @Input() descriptionPropertie : string = '';

  @Output() condicaoChange = new EventEmitter<any>();
  @Output() valueChange = new EventEmitter<any>();

  descriptions : string[] = [];
  values : string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(ApiConfig.apiUrl+this.controller).subscribe((dados : any) =>{
      console.log(dados);
      for (let dado of dados){
        this.descriptions.push(dado[this.descriptionPropertie]);
        this.values.push(dado.id);
      }
    });
  }

  onValueChange(): void {
    this.valueChange.emit(this.value);
  }
}
