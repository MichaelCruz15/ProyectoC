import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiService {
  ELEMENT_DATA: UsuarioInterface[] = [
    {cedula: '0976349871', nombres: 'Jordy', apellidos:'Figueroa', usuario:'Abel Gilbert 3', contrasenia: '123',edad:22},
    {cedula: '1234095739', nombres: 'Yessica', apellidos:'Dias', usuario:'Florida',contrasenia: '123',edad:23},
    {cedula: '5679837988', nombres: 'Mirian', apellidos:'Martinez', usuario:'Abel Gilbert 3',contrasenia: '123',edad:58},
    {cedula: '3456787658', nombres: 'Aldo', apellidos:'Figueroa', usuario:'Abel Gilbert 3',contrasenia: '123',edad:64},
    {cedula: '6788735637', nombres: 'Elian', apellidos:'Figueroa', usuario:'Abel Gilbert 3',contrasenia: '123',edad:22}

  ];
  constructor() { }

  getUsuario(){
    return this.ELEMENT_DATA.slice()
  }
  agregarUsuario(usuario: UsuarioInterface){
    this.ELEMENT_DATA.unshift(usuario)
  }

  updateUser(data: UsuarioInterface){
    var cedula = this.ELEMENT_DATA.find(user => user.cedula == data.cedula)
    if(data.cedula == cedula?.cedula){
      var index  = this.ELEMENT_DATA.findIndex(user => user.cedula == data.cedula)
      this.ELEMENT_DATA[index] = data
    }

  }
  eliminarUsuario(index:number){
    this.ELEMENT_DATA.splice(index,1)
  }
}
