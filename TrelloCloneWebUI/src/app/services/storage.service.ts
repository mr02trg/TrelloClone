import { Injectable } from '@angular/core';
import { UserDetailModel } from 'src/app/swagger/model/userDetailModel';
import { BehaviorSubject, Observable } from 'rxjs';

import { clone } from 'lodash';

@Injectable({
  providedIn: 'root'
})
// interact with browser local storage
export class StorageService {

  private readonly ACCESS_TOKEN: string = "credential";
  private readonly USER_DETAIL: string = "user_detail";

  private user: UserDetailModel;
  private userBehavior: BehaviorSubject<UserDetailModel> = new BehaviorSubject<UserDetailModel>(this.user);

  get AccessToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  set AccessToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  removeToken() {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }

  get User(): string {
    return localStorage.getItem(this.USER_DETAIL);
  }

  getUserDetail(): Observable<UserDetailModel> {
    if (! this.user) {
      const value = localStorage.getItem(this.USER_DETAIL);
      this.user = value ? JSON.parse(value): null;
      this.userBehavior.next(clone(this.user));
    }
    return this.userBehavior.asObservable();
  }

  setUserDetail(data: UserDetailModel) {
    localStorage.setItem(this.USER_DETAIL, JSON.stringify(data));
    this.user = data;
    this.userBehavior.next(clone(this.user));
  }

  removeUserDetail() {
    localStorage.removeItem(this.USER_DETAIL);
    this.user = null;
    this.userBehavior.next(clone(this.user));
  }
}
