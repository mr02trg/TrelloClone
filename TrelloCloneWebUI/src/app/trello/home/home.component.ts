import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    // test dummy authorised controller
    this.http
        .get("api/values")
        .subscribe(x => {
          console.log(x);
        })
  }

}
