import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { UserDetailModel } from 'src/app/models/models';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  user: UserDetailModel;
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.storage
                            .getUserDetail()
                            .subscribe(success => {
                              this.user = success;
                            }, error => {});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.storage.removeToken();
    this.storage.removeUserDetail();
    this.router.navigate([""]);
  }
}
