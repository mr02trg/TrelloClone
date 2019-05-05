import { Component, OnInit } from '@angular/core';

import { TrelloViewModel } from 'src/app/swagger/model/trelloViewModel';
import { BoardService } from 'src/app/services/board.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BoardCreateComponent } from './board-create/board-create.component';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private boardService: BoardService,
    private modal: NgbModal,
    private spinner: SpinnerService
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
    this.spinner.show();
    this.boardService
        .getBoards()
        .subscribe( success => {
          this.boards = success['data'];
          this.spinner.hide();
        }, error => {
          this.spinner.error();
        })
  }

  create() {
    const modalRef = this.modal.open(BoardCreateComponent);

    modalRef.result.then(
      success => {
        this.spinner.show();
        this.boardService
        .createBoard(success)
        .subscribe( response => {
          success.id = response['data'];
          this.boards.unshift(success);
          this.spinner.hide();
        }, error => {
          this.spinner.error();
        })
      },
      cancel => {
      }
    )
  }
}
