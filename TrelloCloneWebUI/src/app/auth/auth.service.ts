import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterViewModel } from 'src/app/swagger/model/registerViewModel';
import { LoginViewModel } from 'src/app/swagger/model/loginViewModel';
import { Observable } from 'rxjs';

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
