import { Component } from '@angular/core';
import { AuthRequest } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})

export class LoginComponent {
  authRequest: AuthRequest = {};

  constructor(
    private router:Router,
    private authSerive:AuthService,
    private snackBar: MatSnackBar
  ){}


  login(form:NgForm){
    if(form.invalid){
        return;
    }
    this.authSerive.authenticate(this.authRequest)
      .subscribe(profile =>{
        /*console.log('response', response);*/

        this.snackBar.open(`Bienvenido ${profile.firstName}`, 'Cerrar',{
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.router.navigate(['']);

      });
  }

}
