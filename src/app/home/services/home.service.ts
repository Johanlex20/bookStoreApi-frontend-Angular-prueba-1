import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookPage } from 'src/app/interfaces/book.interface';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getLastBooks(){
    return this.http.get<Book[]>(`${environment.apiBase}/last-books`);
  }

  paginate(page: number = 0, size: number = 6){
    let params = new HttpParams();
    params = params .append('size',size);
    params = params .append('page',page);
    params = params .append('sort','createdAt,desc');

    return this.http.get<BookPage>(`${environment.apiBase}/books`, { params });
  }

}
