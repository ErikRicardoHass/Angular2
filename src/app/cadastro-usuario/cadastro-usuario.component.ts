import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiConfig } from '../apiConfig';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  usuario = {
    userName: '',
    password: ''
  }
  formSubmitted: boolean = false;
  constructor(private http: HttpClient, private router: Router) {

  }

  submitForm() {
    this.formSubmitted = true;
    if (this.usuario.userName && this.usuario.password) {

      this.calcularHashSHA256(this.usuario.password).then(hash =>
      {
        this.usuario.password = hash;
        this.http.post(ApiConfig.apiUrl+"Usuarios", this.usuario).subscribe(response =>{
          this.router.navigate(['/lista-registros-usuarios']);
        });
      });
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
