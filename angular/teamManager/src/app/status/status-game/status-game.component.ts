import { Component, OnInit, Input,} from '@angular/core';

import { Rsvp } from '../../models/rsvp';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-status-game',
  templateUrl: './status-game.component.html'
})
export class StatusGameComponent implements OnInit {

  @Input() rsvps: Rsvp[];
  @Input() game_num: Number;

  constructor( ) {
   }

  ngOnInit() {

    console.log("status init");
  }

}