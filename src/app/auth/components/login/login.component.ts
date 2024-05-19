import { Component } from '@angular/core';
import { AuthRequest } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})

export class LoginComponent {
  authRequest: AuthRequest = {};

  constructor(
    private router:Router,
    private authSerive:AuthService
  ){}


  login(form:NgForm){
    if(form.invalid){
        return;
    }
    this.authSerive.authenticate(this.authRequest)
      .subscribe(response=>{
        console.log('response', response);
      })
  }

}
