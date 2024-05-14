import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserPage } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  paginate(){
    return this.http.get<UserPage>('http://localhost:8080/api/admin/users');
  }

  create(user: User){
    return this.http.post<User>('http://localhost:8080/api/admin/users', user);
  }

  get(id: number){
    return this.http.get<User>(`http://localhost:8080/api/admin/users/${id}`);
  }

  update(id: number, user:User){
    return this.http.put<User>(`http://localhost:8080/api/admin/users/${id}`, user);
  }

  delete(user:User){
    return this.http.delete(`http://localhost:8080/api/admin/users/${user.id}`);
  }

}
