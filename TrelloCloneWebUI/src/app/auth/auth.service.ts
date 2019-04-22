import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterViewModel } from '../swagger';
import { Observable } from 'rxjs';
import { LoginViewModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  register(request: RegisterViewModel):Observable<any> {
    return this.http.post<any>("api/public/register", request);
  }

  login(request: LoginViewModel): Observable<any> {
    return this.http.post<any>("api/public/login", request);
  }
}
