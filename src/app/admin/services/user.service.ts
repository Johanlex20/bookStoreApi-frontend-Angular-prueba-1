import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserPage } from '../../interfaces/user.interface';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  paginate(){
    return this.http.get<UserPage>(`${environment.apiBase}/admin/users`);
  }

  create(user: User){
    return this.http.post<User>(`${environment.apiBase}/admin/users`, user);
  }

  get(id: number){
    return this.http.get<User>(`${environment.apiBase}/admin/users/${id}`);
  }

  update(id: number, user:User){
    return this.http.put<User>(`${environment.apiBase}/admin/users/${id}`, user);
  }

  delete(user:User){
    return this.http.delete(`${environment.apiBase}/admin/users/${user.id}`);
  }

}
