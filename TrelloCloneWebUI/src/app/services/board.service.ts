import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrelloRequest } from '../swagger/model/trelloRequest';
import { CardRequest } from '../swagger/model/cardRequest';
import { TaskRequest } from '../swagger/model/taskRequest';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient
  ) { }

  getBoards() {
    return this.http.get("api/board");
  }

  createBoard(request: TrelloRequest) {
    return this.http.post("api/board", request);
  }

  getBoardById(id: number) {
    return this.http.get("api/board/" + id);
  }

  createCard(request: CardRequest) {
    return this.http.post("api/board/card", request);
  }

  createTask(request: TaskRequest) {
    return this.http.post("api/task/create", request);
  }
}
