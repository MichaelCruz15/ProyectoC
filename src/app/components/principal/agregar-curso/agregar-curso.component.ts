
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { CursoServiService } from '../services/curso-servi.service';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CursoInterface } from '../interfaces/CursoInterface';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  actionBtn:string = "Guardar"
  cursoForm! : FormGroup
  constructor(private formBuilder: FormBuilder, private _serviceCurso: CursoServiService,
     private router: Router, @Inject(MAT_DIALOG_DATA) public editarDatos: any, private dialogRef: MatDialogRef<AgregarCursoComponent>) {


   }


  //  @Inject(MAT_DIALOG_DATA) public editarDatos: any ,



  ngOnInit(): void {

    this.cursoForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      docente: ['', Validators.required],
      jornada: ['', Validators.required],
      aula: ['', Validators.required],
      alumnos: ['', Validators.required]
    })


    if(this.editarDatos){
      this.actionBtn = "Actualizar"
      this.cursoForm.controls['codigo'].setValue(this.editarDatos.codigo),
      this.cursoForm.controls['descripcion'].setValue(this.editarDatos.descripcion),
      this.cursoForm.controls['docente'].setValue(this.editarDatos.docente),
      this.cursoForm.controls['jornada'].setValue(this.editarDatos.jornada),
      this.cursoForm.controls['aula'].setValue(this.editarDatos.aula),
      this.cursoForm.controls['alumnos'].setValue(this.editarDatos.alumnos)
    }


  }

  closeDialog(){
    this.dialogRef.close()
  }

  agregarCurso(){
    if(!this.editarDatos){
      const curso: CursoInterface = {
        codigo: this.cursoForm.value.codigo,
        descripcion: this.cursoForm.value.descripcion,
        docente: this.cursoForm.value.docente,
        jornada: this.cursoForm.value.jornada,
        aula: this.cursoForm.value.aula,
        alumnos: this.cursoForm.value.alumnos

      }
      this.router.navigate(['lista'])
      .then(()=>this.router.navigate(['principal/curso'],{state:{editarDatos: this._serviceCurso.agregarCurso(curso)}}))

    }else{
      const curso: CursoInterface = {
        codigo: this.cursoForm.value.codigo,
        descripcion: this.cursoForm.value.descripcion,
        docente: this.cursoForm.value.docente,
        jornada: this.cursoForm.value.jornada,
        aula: this.cursoForm.value.aula,
        alumnos: this.cursoForm.value.alumnos
      }
      this.router.navigate(['lista'])
      .then(()=>this.router.navigate(['principal/curso'],{state:{editarDatos: this._serviceCurso.updateCurso(curso)}}))
    }


}
}
