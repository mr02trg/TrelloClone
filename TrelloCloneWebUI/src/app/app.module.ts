import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { PublicPageModule } from './public-page/public-page.module';
import { TrelloModule } from './trello/trello.module';
import { MainPageModule } from './main-page/main-page.module';

import { JwtInterceptor } from './auth/jwt.interceptor';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo:'welcome', pathMatch:'full'},
  {path: '**', redirectTo: 'welcome'}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    PublicPageModule,
    TrelloModule,
    MainPageModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
