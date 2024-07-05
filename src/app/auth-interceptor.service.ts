import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenha o token de autorização do armazenamento local (ou de onde quer que você o tenha armazenado)
    const authToken = sessionStorage.getItem("token");

    // Clone a solicitação e adicione o cabeçalho de autorização com o token
    if (authToken) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(authRequest);
    } else {
      // Se não houver token de autorização, apenas passe a solicitação sem fazer alterações
      return next.handle(request);
    }
  }
}
