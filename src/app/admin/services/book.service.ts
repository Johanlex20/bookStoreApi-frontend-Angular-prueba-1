import { HttpClient, HttpParams } from '@angular/common/http';
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


  paginate(size: number = 5, page: number = 0,){
    let params = new HttpParams();
    params = params .append('size',size);
    params = params .append('page',page);
    params = params .append('sort','createdAt,desc');

    return this.http.get<BookPage>(`${environment.apiBase}/admin/books`, { params });
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
