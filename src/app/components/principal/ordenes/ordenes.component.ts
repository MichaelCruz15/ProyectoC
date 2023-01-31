import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { DocenteInterface } from '../interfaces/DocenteInterface';
import { AgregarUsuarioComponent } from '../agregar-usuario/Usuario-cliente.component';
import { AgregarDocenteComponent } from '../agregar-docente/agregar-docente.component';
import { DocenteServiService } from '../services/docente-servi.service';
import { MatCheckbox } from '@angular/material/checkbox';


@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent {

  listDocente: DocenteInterface[] = []
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'usuario','materia', 'edad', 'estado', 'Ediciones'];
  

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
 
  confirmarPago(index:number){
    
    if(confirm('Quiere aprobar el siguiente pago')){

      this.estado()
      
    }
  }

  estado(){

    'Aprobado'

  }


}
