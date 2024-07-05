import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiConfig } from '../apiConfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) {
    if (sessionStorage.getItem('token')){
      this.router.navigate(['/simulador-sn']);
    }
  }

  username: string = '';
  password: string = '';

  formSubmitted = false;

  login() {

    if (this.username && this.password){
      this.calcularHashSHA256(this.password).then(hash =>{
        this.http.post(ApiConfig.apiUrl+"login", {
          'userName': this.username,
          'password': hash
        }).subscribe((response : any) =>{
          if (response){
            sessionStorage.setItem("token", response.token);
            this.router.navigate(['/simulador-sn']);
          }
          else
          {
            this.formSubmitted = true;
          }
        });
      });
    }
    else
    {
      this.formSubmitted = true;
    }
  }

  private async calcularHashSHA256(texto: string) {
    const buffer = new TextEncoder().encode(texto);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
}
