import { Component, OnInit } from '@angular/core';

import { RegisterViewModel } from '../models/models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private service: AuthService
  ) { }

  register: RegisterViewModel = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  submit() {
    this.service
        .register(this.register)
        .subscribe(x => {
          console.log(x);
        }, err => {});
  }
}
