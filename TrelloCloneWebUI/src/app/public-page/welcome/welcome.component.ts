import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
    // if already authenticated
    if (this.storage.User) {
      this.router.navigate(["/home"]);
    }
  }

}
