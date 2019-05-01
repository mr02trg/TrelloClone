import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TrelloViewModel } from 'src/app/swagger/model/trelloViewModel';

@Component({
  selector: 'app-board-create',
  templateUrl: './board-create.component.html',
  styleUrls: ['./board-create.component.scss']
})
export class BoardCreateComponent implements OnInit {

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  board: TrelloViewModel = {
    name: '',
    description: ''
  }

  ngOnInit() {
  }

  onSubmit() {
    this.activeModal.close(this.board);
  } 

  onCancel() {
    this.activeModal.dismiss();
  }
}
