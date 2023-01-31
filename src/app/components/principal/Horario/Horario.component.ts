import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { horariosInterface } from '../interfaces/HorarioInterface';
import { horariosServiService } from '../services/horario-servi.service';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class horariosComponent implements OnInit {

  listhorarios: horariosInterface[] = []
  displayedColumns: string[] = ['hora', 'lunes','martes', 'miercoles', 'jueves', 'viernes'];
  

  dataSource = new MatTableDataSource(this.listhorarios);
  

  constructor(private usuerService: horariosServiService, public dialog: MatDialog) {}
  

  closeDialog(){
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.listhorarios = this.usuerService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listhorarios);
  }

  applyFilter(event:Event) {
    const filterValue =(event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}

