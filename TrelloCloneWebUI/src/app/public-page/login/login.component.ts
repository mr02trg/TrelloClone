import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginViewModel } from 'src/app/models/models';
import { AuthService } from 'src/app/auth/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: StorageService,
  ) { }

  login: LoginViewModel = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onSubmit() {
    this.authService
        .login(this.login)
        .subscribe(success => {
          this.storage.AccessToken = success.token;
          this.storage.setUserDetail(success.user);
          this.router.navigate(['/home']);
        }, error => {
          console.log(error);
          if(error.status == 401) {
            // toast message
          }
        })
  }
}
