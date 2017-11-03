import { Component, OnInit} from '@angular/core';
import { Player } from '../../models/player'
import { PlayerService } from '../../services/player.service';

import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  subscription: Subscription;

  constructor(private _playerService: PlayerService) {
    this.subscription = this._playerService.getPlayers()
      .subscribe(response => {
        this.players = response
      })
   }

  ngOnInit() {

    this._playerService.getPlayers()
      .subscribe(response => {
        this.players = response
      })
  }

}