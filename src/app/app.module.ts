import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadastroTomadorComponent } from './cadastro-tomador/cadastro-tomador.component';
import { LoginComponent } from './login/login.component';
import { ListaRegistrosPrestadorComponent } from './lista-registros-prestador/lista-registros-prestador.component';
import { MatTableModule } from '@angular/material/table';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListaRegistroUsuariosComponent } from './lista-registro-usuarios/lista-registro-usuarios.component';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { AuthInterceptorService } from './auth-interceptor.service';
import { GridComponent } from './grid/grid.component';
import { ListaRegistrosTomadorComponent } from './lista-registros-tomador/lista-registros-tomador.component';
import { ListaRegistrosEmissoesPeriodicasComponent } from './lista-registros-emissoes-periodicas/lista-registros-emissoes-periodicas.component';
import { CadastroEmissoesPeriodicasComponent } from './cadastro-emissoes-periodicas/cadastro-emissoes-periodicas.component';
import { LookupComponent } from './lookup/lookup.component';
import { SimuladorSNComponent } from './simulador-sn/simulador-sn.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CadastroTomadorComponent,
    LoginComponent,
    ListaRegistrosPrestadorComponent,
    CadastroUsuarioComponent,
    ListaRegistroUsuariosComponent,
    GridComponent,
    ListaRegistrosTomadorComponent,
    ListaRegistrosEmissoesPeriodicasComponent,
    CadastroEmissoesPeriodicasComponent,
    LookupComponent,
    SimuladorSNComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
