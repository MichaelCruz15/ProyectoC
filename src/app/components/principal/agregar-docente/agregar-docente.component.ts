import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { DocenteServiService } from '../services/docente-servi.service';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { DocenteInterface } from '../interfaces/DocenteInterface';

@Component({
  selector: 'app-agregar-docente',
  templateUrl: './agregar-docente.component.html',
  styleUrls: ['./agregar-docente.component.css']
})
export class AgregarDocenteComponent implements OnInit {

  actionBtn:string = "Guardar"
  docenteForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private _serviceDocente: DocenteServiService,
     private router: Router, @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<AgregarDocenteComponent>) {


   }


  //  @Inject(MAT_DIALOG_DATA) public editarDatos: any ,



  ngOnInit(): void {

    this.docenteForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      materia: ['', Validators.required],
      edad: ['', Validators.required]
    })


    if(this.editarDatos){
      this.actionBtn = "Actualizar"
      this.docenteForm.controls['cedula'].setValue(this.editarDatos.cedula),
      this.docenteForm.controls['nombres'].setValue(this.editarDatos.nombres),
      this.docenteForm.controls['apellidos'].setValue(this.editarDatos.apellidos),
      this.docenteForm.controls['usuario'].setValue(this.editarDatos.usuario),
      this.docenteForm.controls['materia'].setValue(this.editarDatos.materia),
      this.docenteForm.controls['edad'].setValue(this.editarDatos.edad)
    }


  }

  closeDialog(){
    this.dialogRef.close()
  }

  agregarDocente(){
    if(!this.editarDatos){
      const docente: DocenteInterface = {
        cedula: this.docenteForm.value.cedula,
        nombres: this.docenteForm.value.nombres,
        apellidos: this.docenteForm.value.apellidos,
        usuario: this.docenteForm.value.usuario,
        materia: this.docenteForm.value.materia,
        edad: this.docenteForm.value.edad

      }
      

      this.router.navigate(['principal/ordenes'])
      .then(()=>this.router.navigate(['principal/docente'],{state:{editarDatos: this._serviceDocente.agregarDocente(docente)}}))

    }else{
      const docente: DocenteInterface = {
        cedula: this.docenteForm.value.cedula,
        nombres: this.docenteForm.value.nombres,
        apellidos: this.docenteForm.value.apellidos,
        usuario: this.docenteForm.value.usuario,
        materia: this.docenteForm.value.materia,
        edad: this.docenteForm.value.edad
      }
      this.router.navigate(['principal/ordenes'])
      .then(()=>this.router.navigate(['principal/docente'],{state:{editarDatos: this._serviceDocente.updateDocente(docente)}}))
    }


}
}
