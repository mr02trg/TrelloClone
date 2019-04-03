import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicPageModule } from './public-page/public-page.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,

    PublicPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
