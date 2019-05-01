import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(
  ) { }

  private status: boolean = false;
  private spinnerBehavior = new BehaviorSubject(this.status);

  getStatus(): Observable<boolean> {
    return this.spinnerBehavior.asObservable();
  }

  show() {
    this.status = true;
    this.spinnerBehavior.next(this.status);
  }

  hide() {
    this.status = false;
    this.spinnerBehavior.next(this.status);
  }

  error() {
    this.status = false;
    this.spinnerBehavior.next(this.status);
  }
}
