import { Injectable } from '@angular/core';
import { DocenteInterface } from '../interfaces/DocenteInterface';


@Injectable({
  providedIn: 'root'
})
export class DocenteServiService {
  ELEMENT_DATA: DocenteInterface[] = [
    {cedula: '0976349871', nombres: 'Jordy', apellidos:'Figueroa', usuario:'DOCENTE', materia: 'Matematicas',edad:22},
    {cedula: '1234095739', nombres: 'Yessica', apellidos:'Dias', usuario:'DOCENTE', materia: 'Programacion',edad:23},
    {cedula: '5679837988', nombres: 'Mirian', apellidos:'Martinez', usuario:'DOCENTE', materia: 'POO',edad:58},
    {cedula: '3456787658', nombres: 'Aldo', apellidos:'Figueroa', usuario:'DOCENTE', materia: 'Lengua',edad:64},
    {cedula: '6788735637', nombres: 'Elian', apellidos:'Figueroa', usuario:'DOCENTE', materia: 'Fisica',edad:22}

  ];
  constructor() { }

  getDocente(){
    return this.ELEMENT_DATA.slice()
  }
  agregarDocente(usuario: DocenteInterface){
    this.ELEMENT_DATA.unshift(usuario)
  }

  updateDocente(data: DocenteInterface){
    var cedula = this.ELEMENT_DATA.find(user => user.cedula == data.cedula)
    if(data.cedula == cedula?.cedula){
      var index  = this.ELEMENT_DATA.findIndex(user => user.cedula == data.cedula)
      this.ELEMENT_DATA[index] = data
    }

  }
  eliminarDocente(index:number){
    this.ELEMENT_DATA.splice(index,1)
  }
}
