import { Injectable, OnInit } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Player } from '../models/player';



@Injectable()
export class PlayerService {
  base: string = 'http://localhost:8000/api/players';
  // playerSubject = new Subject<Player[]>();
  players: Player[];
  playerSubject = new BehaviorSubject<Player[]>(this.players);
  constructor(private _http: Http) {
    this.refreshPlayers();
  }


  refreshPlayers(): void{
    let url = this.base;
    this._http.get(url)
      .subscribe(response => {
        this.players = response.json();
        this.playerSubject.next(this.players);
      })
  }

  getPlayers(): Observable<Player[]>{

    this.refreshPlayers();
    return this.playerSubject.asObservable();
  }


  createPlayer(player: Player): void{
    let url = this.base ;
    this._http.post(url, player)
      .subscribe(
        player => {
          this.refreshPlayers();
        },
        err => {console.log(err)}
        )
  }

  ngOnInit(){
    //this.refreshPlayers();
  }
}