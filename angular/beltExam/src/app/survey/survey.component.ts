import { Component, OnInit } from '@angular/core';
import {Question} from '../models/Question';
import { PollService } from '../services/poll.service';
import { CookieService } from 'ngx-cookie';
import {AuthService} from '../services/auth.service'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  questions: Question[];
  username: String = this._cookieService.get('username');
  inquiry;
  searchQuestion:Question[];
  searchName:string;
  
  constructor(private _pollService: PollService,
    private _cookieService: CookieService,
    private _authService : AuthService,
    private _router: Router) {
    }

  ngOnInit() {
    this._pollService.getPolls()
      .subscribe(questions => {
        this.questions = questions;
      })
  }
  delete(name:String,id:number){
    if(name===this.username)
    {
      console.log("Initiating Delete");
      this._pollService.deletePoll(id,
        (result)=>{
          console.log('result from deleting post', result);
          this.refreshPolls() })
    }
    else{
      console.log('Only Creaters can delete their own polls! Sorrey!');
    }
  }
  search(event:Event){
    event.preventDefault();
    this.searchName=this.inquiry;
    console.log(this.inquiry);
    this._pollService.search(this.inquiry)
      .subscribe(searchQuestions=>{
        this.searchQuestion=searchQuestions;
      })
    console.log("Posts by" +this.inquiry);
    console.log(this.searchQuestion);
    this.searchQuestion=[];
  }
  logout(){
    this._authService.logout();
    console.log('Logged Out');
    this._router.navigate(['']);
  }

  refreshPolls(){
    console.log("refresh");
    this._pollService.getPolls()
    .subscribe(questions => {
      this.questions = questions;
    })
  }
  create(){
    console.log('Route to Create'); 
    this._router.navigate(['dashboard','create']);
  }
  show(id){
    console.log('Rerouting to Individual Post');
    this._router.navigate(['dashboard','poll',id]);
  }

}
