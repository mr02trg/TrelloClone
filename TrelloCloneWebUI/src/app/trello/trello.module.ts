import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class TrelloModule { }
