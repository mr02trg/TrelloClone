import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { forEach, find } from 'lodash';

import { BoardService } from 'src/app/services/board.service';
import { SpinnerService } from 'src/app/services/spinner.service';

import { BoardViewModel } from 'src/app/swagger/model/boardViewModel';
import { CardRequest } from 'src/app/swagger/model/cardRequest';
import { TaskRequest } from 'src/app/swagger/model/taskRequest';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private spinner: SpinnerService
  ) { }

  // board
  subscriptions: Subscription[] = [];
  boardId: number;
  board: BoardViewModel

  // card
  isCardAdd = false;
  newCard: CardRequest = {
    name: '',
    boardId: 0,
    priority: 0
  }

  // task
  isTaskAdd = false;
  targetCardId = 0;     // which card to add task to
  newTask: TaskRequest = {
    name: '',
    cardId: 0,
    priority: 0
  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params
          .pipe(map(params => params['id']))
          .subscribe(id => {
            this.boardId = id;
            this.loadBoard();
          })
    )
  }

  ngOnDestroy() {
    forEach(this.subscriptions, x => x.unsubscribe());
    this.subscriptions = [];
  }

  addCard() {
    // construct card request
    this.newCard.boardId = this.boardId;
    this.newCard.priority = this.board.cards.length + 1;

    this.spinner.show();
    this.boardService
        .createCard(this.newCard)
        .subscribe(success => {
          this.newCard.id = success['data'];
          this.board.cards.push(this.newCard);
          this.clearNewCard();
          this.spinner.hide();
        }, error => {
          this.spinner.error();
        })
  }

  cancelAddCard() {
    this.isCardAdd = false;
    this.clearNewCard();
  }

  private clearNewCard() {
    this.newCard = {
      name: '',
      boardId: 0,
      priority: 0
    }
  }

  addTask(cardId: number) {
    const card = find(this.board.cards, x => x.id === cardId);
    this.newTask.cardId = cardId;
    this.newTask.priority = card.tasks.length + 1

    this.spinner.show();
    this.boardService
        .createTask(this.newTask)
        .subscribe(success => {
          this.newTask.id = success['data'];
          card.tasks.push(this.newTask);

          this.cancelAddTask();
          this.spinner.hide();
        }, error => {
          this.spinner.error();
        })
  }

  cancelAddTask() {
    this.isTaskAdd = false;
    this.targetCardId = 0;
    this.clearNewTask();
  }

  private clearNewTask() {
    this.newTask = {
      name: '',
      cardId: 0,
      priority: 0
    }
  }

  private loadBoard() {
    this.spinner.show();
    this.boardService
        .getBoardById(this.boardId)
        .subscribe(success => {
          this.board = success['data'];
          this.spinner.hide();
        }, error => {
          this.spinner.error();
        });
  }
}
