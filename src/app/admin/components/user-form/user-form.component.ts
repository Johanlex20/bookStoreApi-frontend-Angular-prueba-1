import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../../interfaces/user.interface';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: []
})
export class UserFormComponent implements OnInit {

  errors: string[] = [];
  user?: User;
  form?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      this.userService.get(parseInt(userId))
        .subscribe(user => {

          this.user = user;

          this.form = this.fb.group({
            firstName: [user.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
            lastName: [user.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
            email: [user.email, [Validators.required, Validators.email]],
            password: [user.password, [Validators.required, Validators.pattern('[A-Za-z0-9-]+')]],
            role: [user.role, [Validators.required]]
          });

        });
    } else {
      this.form = this.fb.group({
        firstName: [, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        lastName: [, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
        email: [, [Validators.required, Validators.email]],
        password: [, [Validators.required, Validators.pattern('[A-Za-z0-9-]+')]],
        role: [, [Validators.required]]
      });
    }

  }

  controlHasError(control: string, error: string) {
    return this.form!.controls[control].hasError(error);
  }

  save() {
    if (this.form!.invalid) {
      return;
    }

    let user = this.form!.value;
    let request;

    if (this.user) {
      request = this.userService.update(this.user.id, user)
    } else {
      request = this.userService.create(user)
    }

    request
      .subscribe({

        next: user => {
          this.router.navigate(['/users'])
        },

        error: error => {

          if (error.error.status === 400) {
            this.errors.push(error.error.detail)
          } else if (error.error.status === 422) {
            this.errors.push(...error.error.errors)
          }
        }
      });
  }



}
