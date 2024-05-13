import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, isFormRecord } from '@angular/forms';
import { first, last } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: []
})
export class UserFormComponent {

  errors: string[] =[];

  form: FormGroup = this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    lastName:['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.pattern('[A-Za-z0-9-]+')]],
    role:['', [Validators.required]]
  });
  
  constructor(
    private fb:FormBuilder,
    private userService: UserService,
    private router: Router
  ){}

  controlHasError(control:string, error:string){
    return this.form.controls[control].hasError(error);
  }

  save(){
    if(this.form.invalid){
      return;
    }

    let user = this.form.value;

    this.userService.create(user)
    .subscribe({
    
      next:user =>{
        this.router.navigate(['/users'])
      },

      error: error =>{

        if(error.error.status === 400){
          this.errors.push(error.error.detail)
        }else if( error.error.status === 422){
          this.errors.push(...error.error.errors)
        }
      }
      
    });
  }

}
