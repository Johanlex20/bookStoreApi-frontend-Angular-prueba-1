import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

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
      private fb: FormBuilder,
      private bookService: BookService,
      private router: Router
    ){}

    controlHasError(control: string, error: string){
      return this.form.controls[control].hasError(error)
    }

    save(){
      if(this.form.invalid){
        return;
      }

      let book = this.form.value;
      book.coverPath = 'dummy.jpg';
      book.filePath = 'dummy.pdf';

      this.bookService.create(book)
        .subscribe(book =>{
          this.router.navigate(['/']);
        });
    }
}
