import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequest } from '../interfaces/auth.interface';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  authenticate(authRequest: AuthRequest){
    return this.http.post(`${environment.apiBase}/authenticate`, authRequest);
  }

}
