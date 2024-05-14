import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookPage } from '../../interfaces/book.interface';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http:HttpClient
  ) {}


  paginate(){
    return this.http.get<BookPage>('http://localhost:8080/api/admin/books');
  }

  create(book: Book){
    return this.http.post<Book>('http://localhost:8080/api/admin/books', book);
  }

  get(id: number){
    return this.http.get<Book>(`http://localhost:8080/api/admin/books/${id}`);
  }

  update(id: number, book: Book){
    return this.http.put<Book>(`http://localhost:8080/api/admin/books/${id}`, book);
  }

  delete(book:Book){ 
    return this.http.delete(`http://localhost:8080/api/admin/books/${book.id}`);
  }

  uploadFile(formData: FormData){
    return this.http.post('http://localhost:8080/api/media/upload',formData);
  }
}
