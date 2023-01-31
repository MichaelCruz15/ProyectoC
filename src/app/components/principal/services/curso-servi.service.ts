import { Injectable } from '@angular/core';
import { CursoInterface } from '../interfaces/CursoInterface';


@Injectable({
  providedIn: 'root'
})
export class CursoServiService {
  ELEMENT_DATA: CursoInterface[] = [
    {codigo: '0000000001', descripcion: 'Algebra', docente:'Martinez Castro', jornada:'Matutina', aula: '001',alumnos:22},
    {codigo: '0000000002', descripcion: 'Inteligencia', docente:'Alfredo Brito', jornada:'Vespertina',aula: '001',alumnos:23},
    {codigo: '0000000003', descripcion: 'Calculo I', docente:'Elizabet Herrera', jornada:'Matutina',aula: '002',alumnos:58},
    {codigo: '0000000004', descripcion: 'Matematicas', docente:'Carlos Moreira', jornada:'Vespertina',aula: '003',alumnos:64},
    {codigo: '0000000005', descripcion: 'Fisica', docente:'Silvana Iturralde', jornada:'Matutina',aula: '004',alumnos:22},
    {codigo: '0000000006', descripcion: 'Programacion', docente:'Jenny Velastegi', jornada:'Vespertina',aula: '005',alumnos:23},
    {codigo: '0000000008', descripcion: 'Introduccion', docente:'Marlon Torres', jornada:'Vespertina',aula: '007',alumnos:23},
    {codigo: '0000000009', descripcion: 'Sociales', docente:'Leonel Sanches', jornada:'Matutina',aula: '008',alumnos:23},
    {codigo: '0000000010', descripcion: 'Anatomia', docente:'Mario Casas', jornada:'Nocturna',aula: '009',alumnos:23}

  ];
  constructor() { }

  getCurso(){
    return this.ELEMENT_DATA.slice()
  }
  agregarCurso(usuario: CursoInterface){
    this.ELEMENT_DATA.unshift(usuario)
  }

  updateCurso(data: CursoInterface){
    var codigo = this.ELEMENT_DATA.find(user => user.codigo == data.codigo)
    if(data.codigo == codigo?.codigo){
      var index  = this.ELEMENT_DATA.findIndex(user => user.codigo == data.codigo)
      this.ELEMENT_DATA[index] = data
    }

  }
  eliminarCurso(index:number){
    this.ELEMENT_DATA.splice(index,1)
  }
}