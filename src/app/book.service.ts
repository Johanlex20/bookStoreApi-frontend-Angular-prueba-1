import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookPage } from './interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http:HttpClient
  ) { }


  paginate(){
    return this.http.get<BookPage>('http://localhost:8080/api/admin/books');
  }


  create(book: Book){
       return this.http.post<Book>('http://localhost:8080/api/admin/books', book)
  }

}
