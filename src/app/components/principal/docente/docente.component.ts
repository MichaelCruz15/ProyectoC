import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { AgregarUsuarioComponent } from '../agregar-usuario/Usuario-cliente.component';
import { ClienteServiService } from '../services/cliente-servi.service';
import { DocenteInterface } from '../interfaces/DocenteInterface';
import { DocenteServiService } from '../services/docente-servi.service';
import { AgregarDocenteComponent } from '../agregar-docente/agregar-docente.component';


@Component({
  selector: 'app-Usuario',
  templateUrl: './Docente.component.html',
  styleUrls: ['./Docente.component.css']
})
export class DocenteComponent implements OnInit {

  listDocente: DocenteInterface[] = []
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'usuario','materia', 'edad', 'Ediciones'];


  dataSource = new MatTableDataSource(this.listDocente);


  constructor(private docenteService: DocenteServiService, public dialog: MatDialog) {}
  openDialog() {

    this.dialog.open(AgregarDocenteComponent);
  }

  closeDialog(){
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.cargarDocente();

  }
  //↑

  cargarDocente(){
    this.listDocente = this.docenteService.getDocente();
    this.dataSource = new MatTableDataSource(this.listDocente);

  }

  editDocente(element: any){
    this.dialog.open(AgregarDocenteComponent,{
      data:element

    })


  }

  openDialogAgregar(){
    this.dialog.open(AgregarDocenteComponent, {
      width: '50%',
    })
  }
  applyFilter(event:Event) {
    const filterValue =(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarDocente(index:number){
    if(confirm('Quiere eliminar docente')){
      console.log(index);
      this.docenteService.eliminarDocente(index)
      this.cargarDocente();

    }

  }
}

