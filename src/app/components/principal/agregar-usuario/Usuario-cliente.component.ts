import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { ClienteServiService } from '../services/cliente-servi.service';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';

@Component({
  selector: 'app-Usuario-cliente',
  templateUrl: './Usuario-cliente.component.html',
  styleUrls: ['./Usuario-cliente.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  actionBtn:string = "Guardar"
  userForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private _serviceUsuer: ClienteServiService,
     private router: Router, @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<AgregarUsuarioComponent>) {


   }


  //  @Inject(MAT_DIALOG_DATA) public editarDatos: any ,



  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required],
      edad: ['', Validators.required]
    })


    if(this.editarDatos){
      this.actionBtn = "Actualizar"
      this.userForm.controls['cedula'].setValue(this.editarDatos.cedula),
      this.userForm.controls['nombres'].setValue(this.editarDatos.nombres),
      this.userForm.controls['apellidos'].setValue(this.editarDatos.apellidos),
      this.userForm.controls['usuario'].setValue(this.editarDatos.usuario),
      this.userForm.controls['contrasenia'].setValue(this.editarDatos.contrasenia),
      this.userForm.controls['edad'].setValue(this.editarDatos.edad)
    }


  }

  closeDialog(){
    this.dialogRef.close()
  }

  agregarUsuario(){
    if(!this.editarDatos){
      const user: UsuarioInterface = {
        cedula: this.userForm.value.cedula,
        nombres: this.userForm.value.nombres,
        apellidos: this.userForm.value.apellidos,
        usuario: this.userForm.value.usuario,
        contrasenia: this.userForm.value.contrasenia,
        edad: this.userForm.value.edad

      }

      this.router.navigate(['/Lista'])
      .then(()=>this.router.navigate(['principal/usuario'],{state:{editarDatos: this._serviceUsuer.agregarUsuario(user)}}))
      
    }else{
      const user: UsuarioInterface = {
        cedula: this.userForm.value.cedula,
        nombres: this.userForm.value.nombres,
        apellidos: this.userForm.value.apellidos,
        usuario: this.userForm.value.usuario,
        contrasenia: this.userForm.value.contrasenia,
        edad: this.userForm.value.edad
      }
      this.router.navigate(['/Lista'])
      .then(()=>this.router.navigate(['principal/usuario'],{state:{editarDatos: this._serviceUsuer.updateUser(user)}}))
    }    }


}

