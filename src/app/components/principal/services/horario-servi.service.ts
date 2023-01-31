import { Injectable } from '@angular/core';
import { horariosInterface } from '../interfaces/HorarioInterface';
@Injectable({
  providedIn: 'root'
})
export class horariosServiService {
  ELEMENT_DATA: horariosInterface[] = [
    {hora: '7:00', lunes:'Matematicas', martes:'Calculo', miercoles:'Sociales',jueves: 'Calculo',viernes:'Programacion'},
    {hora: '8:00', lunes:'Sociales', martes:'Programacion', miercoles:'Algebra',jueves: 'Ciencias naturales',viernes:'Calculo'},
    {hora: '9:00', lunes:'Ciencias naturales', martes:'Introduccion', miercoles:'Anatomia',jueves: 'Fisica',viernes:'POO'},
    {hora: '10:00', lunes:'Algebra', martes:'Sociales', miercoles:'Matematicas',jueves: 'Matematicas',viernes:'POO'},
    {hora: '11:00', lunes:'Anatomia', martes:'Lengua', miercoles:'Ed.Fisica',jueves: 'Introduccion',viernes:'Anatomia'},
    {hora: '12:00', lunes:'Lengua', martes:'Ed.Fisica', miercoles:'Programacion',jueves: 'Ed. Fisica',viernes:'Algebra'}

    
  ];  

  
  constructor() { }

  getUsuario(){
    return this.ELEMENT_DATA.slice()
  }
  agregarUsuario(usuario: horariosInterface){
    this.ELEMENT_DATA.unshift(usuario) 
  }

  updateUser(data: horariosInterface){
    var hora= this.ELEMENT_DATA.find(user => user.hora == data.hora)
    if(data.hora == hora?.hora){
      var index  = this.ELEMENT_DATA.findIndex(user => user.hora == data.hora)
      this.ELEMENT_DATA[index] = data
    }

  }

  eliminarUsuario(index:number){
    this.ELEMENT_DATA.splice(index,1)
  }
}
