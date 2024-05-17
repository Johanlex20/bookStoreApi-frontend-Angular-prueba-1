import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/interfaces/book.interface';
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

}
