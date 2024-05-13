import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../interfaces/book.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: []
})
export class BookFormComponent implements OnInit{

    errors:string[] = [];
    book?: Book;
    form?: FormGroup; 

    constructor(
      private fb: FormBuilder,
      private bookService: BookService,
      private router: Router,
      private route: ActivatedRoute
    ){}

    ngOnInit(): void {
       const bookId = this.route.snapshot.paramMap.get('id');

       if(bookId){
        this.bookService.get(parseInt(bookId))
        .subscribe(book =>{
  
          this.book = book;
  
          this.form = this.fb.group({
            title:[book.title, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            slug:[book.slug, [Validators.required, Validators.pattern('[A-Za-z0-9-]+')]],
            desc:[book.desc, [Validators.required]],
            price:[book.price, [Validators.required, Validators.min(0)]],
          });
        });
       }else{
          this.form = this.fb.group({
            title:[, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            slug:[, [Validators.required, Validators.pattern('[A-Za-z0-9-]+')]],
            desc:[, [Validators.required]],
            price:[, [Validators.required, Validators.min(0)]],
          });
        }
    }

    controlHasError(control: string, error: string){
      return this.form!.controls[control].hasError(error)
    }

    save(){
      if(this.form!.invalid){
        return;
      }

      let book = this.form!.value;
      book.coverPath = 'dummy.jpg';
      book.filePath = 'dummy.pdf';

      let request;

      if(this.book){
        request = this.bookService.update(this.book.id, book)

      }else{
        request = this.bookService.create(book);

      }

      request
        .subscribe({
          next:book =>{
            this.router.navigate(['/']);
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
