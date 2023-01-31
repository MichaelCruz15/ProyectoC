import { ListKeyManager } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CursoComponent } from './components/principal/curso/curso.component';
import { DocenteComponent } from './components/principal/docente/docente.component';
import { ListaComponent } from './components/principal/lista/lista.component';
import { UsuarioComponent } from './components/principal/usuario/usuario.component';
import { OrdenesComponent } from './components/principal/ordenes/ordenes.component';
import { horariosComponent } from './components/principal/Horario/Horario.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'principal', loadChildren: ()=> import('./components/principal/principal.module').then(x => x.PrincipalModule) },
  { path: 'principal/usuario', component: UsuarioComponent },
  { path: 'principal/curso', component: CursoComponent},
  { path: 'principal/horario', component: horariosComponent },
  { path: 'Lista',component:ListaComponent},
  { path: 'principal/ordenes', component: OrdenesComponent },
  { path: 'principal/docente', component: DocenteComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
