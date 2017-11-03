import { Component, OnInit } from '@angular/core';
import { RsvpService } from '../services/rsvp.service';
import { GameService } from '../services/game.service';
import { PlayerService } from '../services/player.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Rsvp } from '../models/rsvp';
import { Game } from '../models/game';
import { Player } from '../models/player';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  game_num: Number;
  game: Game;

  players: Player[];
  games: Game[];
  rsvps: Rsvp[];
  all_rsvps: Rsvp[];
  superSubscription: Subscription;

  rsvpSubscription: Subscription;
  gameSubscription: Subscription;
  playerSubscription: Subscription;

  constructor(private _route: ActivatedRoute,
    private _rsvpService: RsvpService,
    private _gameService: GameService,
    private _playerService: PlayerService) {

    this.games = this._gameService.getGames();

    console.log('this.games', this.games);
     this.superSubscription =
        Observable.zip(
          this._route.paramMap,
          this._rsvpService.getRsvps(),
          this._playerService.getPlayers(),
        ).subscribe( ([params, rsvps,  players]) => {
            this.game_num = parseInt(params.get('id'));
            this.rsvps = rsvps;
            this.players = players;
          }
        )
   }

  ngOnInit() {

  }

  generateGame(){
    let num = this.games.length + 1;
    this._gameService.createGame(new Game(num));

  }
  deleteGames(){
    for(let game of this.games){
      this._gameService.deleteGame(game);
    }
  }
}