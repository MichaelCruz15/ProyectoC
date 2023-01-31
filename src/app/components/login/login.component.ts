import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void{

  }

  ingresar(){
  
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if(usuario == 'grupo8' && password == '123') {
      this.router.navigateByUrl('/principal');

    }else{
        this.error();
        
    }
  
  
  }
  error(){
    this._snackBar.open('credenciales invalidas', '',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
  
  

}
