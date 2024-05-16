import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookPage } from '../../interfaces/book.interface';
import { tick } from '@angular/core/testing';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http:HttpClient
  ) {}


  paginate(){
    return this.http.get<BookPage>(`${environment.apiBase}/admin/books`);
  }

  create(book: Book){
    return this.http.post<Book>(`${environment.apiBase}/admin/books`, book);
  }

  get(id: number){
    return this.http.get<Book>(`${environment.apiBase}/admin/books/${id}`);
  }

  update(id: number, book: Book){
    return this.http.put<Book>(`${environment.apiBase}/admin/books/${id}`, book);
  }

  delete(book:Book){ 
    return this.http.delete(`${environment.apiBase}/admin/books/${book.id}`);
  }

  uploadFile(formData: FormData){
    return this.http.post(`${environment.apiBase}/media/upload`,formData);
  }
}
