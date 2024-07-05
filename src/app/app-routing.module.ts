import { ListaRegistrosPrestadorComponent } from './lista-registros-prestador/lista-registros-prestador.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroTomadorComponent } from './cadastro-tomador/cadastro-tomador.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListaRegistroUsuariosComponent } from './lista-registro-usuarios/lista-registro-usuarios.component';
import { ListaRegistrosTomadorComponent } from './lista-registros-tomador/lista-registros-tomador.component';
import { CadastroEmissoesPeriodicasComponent } from './cadastro-emissoes-periodicas/cadastro-emissoes-periodicas.component';
import { SimuladorSNComponent } from './simulador-sn/simulador-sn.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro/:id', component: CadastroComponent},
  { path: 'simulador-sn', component: SimuladorSNComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'cadastro-tomador', component: CadastroTomadorComponent},
  { path: 'cadastro-tomador/:id', component: CadastroTomadorComponent},
  { path: 'lista-registros-prestador', component: ListaRegistrosPrestadorComponent },
  { path: 'lista-registros-usuarios', component: ListaRegistroUsuariosComponent },
  { path: 'lista-registros-Tomador', component: ListaRegistrosTomadorComponent },
  { path: 'cadastro-usuarios', component: CadastroUsuarioComponent },
  { path: 'cadastro-emissao-periodica', component: CadastroEmissoesPeriodicasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

