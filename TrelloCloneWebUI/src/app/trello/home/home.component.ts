import { Component, OnInit } from '@angular/core';

import { TrelloViewModel } from 'src/app/swagger/model/trelloViewModel';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private boardService: BoardService
  ) { }

  boards: TrelloViewModel[] = [];

  request: TrelloViewModel = {
    name: '',
    description: ''
  }

  editMode: boolean = false;

  ngOnInit() {
    this.getBoard();
  }

  getBoard() {
    this.boardService
        .getBoard()
        .subscribe( success => {
          this.boards = success['data'];
        }, error => {
        })
  }

  create() {
    this.boardService
        .createBoard(this.request)
        .subscribe( success => {
          this.request.id = success['data'];
          this.boards.push(this.request);
          this.reset();
        }, error => {

        })
  }

  cancel() {
    this.editMode = false;
    this.reset();
  }

  reset() {
    this.request = {
      name: '',
      description: ''
    }
  }

}
