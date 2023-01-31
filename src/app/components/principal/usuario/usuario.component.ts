import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';
import { AgregarUsuarioComponent } from '../agregar-usuario/Usuario-cliente.component';
import { ClienteServiService } from '../services/cliente-servi.service';

@Component({
  selector: 'app-Usuario',
  templateUrl: './Usuario.component.html',
  styleUrls: ['./Usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listUsuario: UsuarioInterface[] = []
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'usuario','contrasenia', 'edad', 'Ediciones'];
  

  dataSource = new MatTableDataSource(this.listUsuario);
  

  constructor(private usuerService: ClienteServiService, public dialog: MatDialog) {}
  openDialog() {
  
    this.dialog.open(AgregarUsuarioComponent);
  }

  closeDialog(){
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.cargarUsuario();
    
  }
  //↑
  
  cargarUsuario(){
    this.listUsuario = this.usuerService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuario);
    
  }
 
  editUsuario(element: any){
    this.dialog.open(AgregarUsuarioComponent,{
      data:element 
      
    })

     
  }

  openDialogAgregar(){
    this.dialog.open(AgregarUsuarioComponent, {
      width: '50%',
    })
  }
  applyFilter(event:Event) {
    const filterValue =(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index:number){
    if(confirm('Quiere eliminar el usuario')){
      console.log(index);
      this.usuerService.eliminarUsuario(index)
      this.cargarUsuario();   

    }

  }
}

