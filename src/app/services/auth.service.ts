import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  connect(data: { login: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:1245/api/user/login', data);
  }

  register(data: { title: string, login: string, password: string }): Observable<any> {
    return this.http.post('http://localhost:1245/api/user/register', data);
  }
}
