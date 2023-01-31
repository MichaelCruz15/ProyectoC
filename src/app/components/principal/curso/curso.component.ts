import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { AgregarUsuarioComponent } from '../agregar-usuario/Usuario-cliente.component';
import { ClienteServiService } from '../services/cliente-servi.service';
import { CursoInterface } from '../interfaces/CursoInterface';
import { CursoServiService } from '../services/curso-servi.service';
import { AgregarCursoComponent } from '../agregar-curso/agregar-curso.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  listCurso: CursoInterface[] = []
  displayedColumns: string[] = ['codigo', 'descripcion', 'docente', 'jornada','aula', 'alumnos', 'Ediciones'];


  dataSource = new MatTableDataSource(this.listCurso);


  constructor(private cursoService: CursoServiService, public dialog: MatDialog) {}
  openDialog() {

    this.dialog.open(AgregarCursoComponent);
  }

  closeDialog(){
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.cargarCurso();

  }
  //↑

  cargarCurso(){
    this.listCurso = this.cursoService.getCurso();
    this.dataSource = new MatTableDataSource(this.listCurso);

  }

  editCurso(element: any){
    this.dialog.open(AgregarCursoComponent,{
      data:element

    })


  }

  openDialogAgregar(){
    this.dialog.open(AgregarCursoComponent, {
      width: '50%',
    })
  }
  applyFilter(event:Event) {
    const filterValue =(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarCurso(index:number){
    if(confirm('Quiere eliminar el curso')){
      console.log(index);
      this.cursoService.eliminarCurso(index)
      this.cargarCurso();

    }

  }
}

