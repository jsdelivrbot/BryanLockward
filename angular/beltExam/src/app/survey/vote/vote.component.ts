import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import {Question} from '../../models/question';
import {PollService} from '../../services/poll.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  
  poll:Question=new Question();
  
  constructor(    
    private _router: Router,
    private _route: ActivatedRoute,
    private _pollService: PollService,) { }

  ngOnInit() {

    this._route.paramMap
    .switchMap(params => {
      console.log(params)
      return this._pollService.getPoll(params.get('id'));
    })
    .subscribe(poll => this.poll = poll);

    console.log(this.poll);
  }
  vote(option:String){
    if(option===this.poll.option1)
    {
      this.poll.option1vote++;
    }
    else if(option===this.poll.option2)
    {
      this.poll.option2vote++;
    }
    else if(option===this.poll.option3)
    {
      this.poll.option3vote++;
    }
    else if(option===this.poll.option4)
    {
      this.poll.option4vote++;
    }

    this._pollService.update(this.poll,
      (result)=>{
        console.log('result from updating post', result);
      });
   }

  goBack(){
    this._router.navigate(['dashboard']);
  }
}
