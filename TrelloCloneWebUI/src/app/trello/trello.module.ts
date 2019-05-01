import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { BoardCreateComponent } from './home/board-create/board-create.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    HomeComponent,
    BoardCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    BoardCreateComponent
  ]
})
export class TrelloModule { }
