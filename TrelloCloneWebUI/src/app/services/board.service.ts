import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrelloRequest } from '../swagger/model/trelloRequest';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private http: HttpClient
  ) { }

  getBoard() {
    return this.http.get("api/board");
  }

  createBoard(request: TrelloRequest) {
    return this.http.post("api/board", request);
  }
}
