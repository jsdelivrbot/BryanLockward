import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Question} from '../../models/question';
import {PollService} from '../../services/poll.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  poll:Question=new Question();

@Output() newQuestion = new EventEmitter<Question>();
  constructor(private _pollService: PollService,
    private _authService: AuthService,
    private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(event: Event){
    event.preventDefault();
    console.log('submitted');

    this.poll.time= new Date();
    this.poll.option1vote=0;
    this.poll.option2vote=0;
    this.poll.option3vote=0;
    this.poll.option4vote=0;
    this.poll.name=this._authService.currentUserID();

    this._pollService.createPoll(this.poll)
      .subscribe(poll=>{
        this.newQuestion.emit(poll);
      })
      this._router.navigate(['dashboard']);
  }
  cancel(){
    this._router.navigate(['dashboard']);
  }
}
