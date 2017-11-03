import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Game } from '../models/game';

@Injectable()
export class GameService {
  base: string = 'http://localhost:8000/api/games';

  games: Game[];
  gameSubject = new BehaviorSubject<Game[]>(this.games);

  constructor(private _http: Http) {
    this.refresh();
   }

  refresh(): void{
    let url = this.base;
    this._http.get(url)
      .subscribe(response => {
        this.games = response.json();
        this.gameSubject.next(this.games);
        console.log('refreshed games')
      })
  }


  getGames(): Game[]{
    this.refresh();
    return this.gameSubject.getValue();
  }


  createGame(game: Game): void{
    let url = this.base ;

    console.log('POSTING', url);
    this._http.post(url, game)
      .subscribe(
        game => {
          console.log('created game successfully', game);
          this.refresh();
        },
        err => {console.log('error creating game', err)}
        )
  }

  deleteGame(game: Game): void{
    let url = this.base+ '/' + game['_id'];
    this._http.delete(url)
      .subscribe(
        game => {
          console.log('deleted game successfully', game);
          this.refresh();
        },
        err => {console.log('error deleting game', err)}
        )
  }

}