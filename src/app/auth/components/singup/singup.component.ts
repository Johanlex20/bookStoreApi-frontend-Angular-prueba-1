import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: []
})
export class SingupComponent {

    form:FormGroup = this.fb.group({
      firstName: [, [Validators.required]],
      lastName: [, [Validators.required]],
      email:[, [Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(4)]],
    });

    errors:string[]=[];
    passwordVisible = false;

    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private snackBar: MatSnackBar
    ){}

    controlHasError(control: string, error: string) {
      return this.form.controls[control].hasError(error);
    }

    singup(){
      if(this.form.invalid){
        return;
      }
  
      const formValue = this.form.value;

      this.authService.signup(formValue)
        .subscribe({
          next:profile=>{
            this.authService.authenticate({
              email: formValue.email,
              password: formValue.password
            })
            .subscribe(profile=>{
              this.snackBar.open(`Bienvenido ${profile.firstName}`, 'Cerrar',{
                duration: 5000,
                verticalPosition: 'bottom',
                horizontalPosition: 'center'
              });
              this.router.navigate(['']);
            })
          },
          error: error =>{
            if(error.error.status === 400){
              this.errors.push(error.error.detail)
            } else if( error.error.status === 422){
                this.errors.push(...error.error.errors)
            }
          }
        });      

    }

}
