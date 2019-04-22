import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent}
]

@NgModule({
  declarations: [WelcomeComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    WelcomeComponent
  ]
})
export class PublicPageModule { }
