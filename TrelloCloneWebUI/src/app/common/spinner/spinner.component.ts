import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerService } from 'src/app/services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  constructor(
    private ngxSpinner: NgxSpinnerService,
    private service: SpinnerService
  ) { }

  subscription: Subscription;

  ngOnInit() {
    this.subscription = 
    this.service
        .getStatus()
        .subscribe(x => {
          if (x) {
            this.ngxSpinner.show();
          }
          else {
            this.ngxSpinner.hide();
          }
        })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
