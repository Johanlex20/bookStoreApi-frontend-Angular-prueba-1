import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: []
})
export class BookFormComponent {
    form: FormGroup = this.fb.group({
      title:['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      slug:['', [Validators.required, Validators.pattern('[A-Za-z0-9-]+')]],
      desc:['', [Validators.required]],
      price:['', [Validators.required, Validators.min(0)]],
    });

    constructor(
      private fb: FormBuilder
    ){}

    controlHasError(control: string, error: string){
      return this.form.controls[control].hasError(error)
    }

    save(){
      console.log('form is valid?', this.form.valid)
      console.log('form', this.form.value)
    }
}
