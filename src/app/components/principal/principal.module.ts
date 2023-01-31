import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { sharedModule } from '../shared/shared.module';
import { PrincipalComponent } from './principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DocenteComponent } from './docente/docente.component';
import { horariosComponent } from './Horario/Horario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/Usuario-cliente.component';
import { ClienteServiService } from './services/cliente-servi.service';
import { AgregarCursoComponent } from './agregar-curso/agregar-curso.component';
import { CursoComponent } from './curso/curso.component';
import { AgregarDocenteComponent } from './agregar-docente/agregar-docente.component';
import { OrdenesComponent } from './ordenes/ordenes.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    InicioComponent,
    NavbarComponent,
    DocenteComponent,
    horariosComponent,
    UsuarioComponent,
    AgregarUsuarioComponent,
    AgregarCursoComponent,
    CursoComponent,
    AgregarDocenteComponent,
    OrdenesComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    sharedModule
  ]
})
export class PrincipalModule { }
