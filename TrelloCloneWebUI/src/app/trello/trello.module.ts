import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

import { HomeComponent } from './home/home.component';
import { BoardCreateComponent } from './home/board-create/board-create.component';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'board/:id', component: BoardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    HomeComponent,
    BoardCreateComponent,
    BoardComponent,
    TaskComponent
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
