import { Component, OnInit } from '@angular/core';

import { TrelloViewModel } from 'src/app/swagger/model/trelloViewModel';
import { BoardService } from 'src/app/services/board.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BoardCreateComponent } from './board-create/board-create.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private boardService: BoardService,
    private modal: NgbModal
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
    const modalRef = this.modal.open(BoardCreateComponent);

    modalRef.result.then(
      success => {
        this.boardService
        .createBoard(success)
        .subscribe( response => {
          success.id = response['data'];
          this.boards.unshift(success);
        }, error => {

        })
      },
      cancel => {
      }
    )
  }
}
