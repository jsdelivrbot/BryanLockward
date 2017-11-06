import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Question } from '../models/question';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PollService {

  questions: Question[];
  base: string = 'http://localhost:8000/api/polls';

  constructor(private _http: Http) { }

  getPolls(): Observable<Question[]> {
    return this._http.get(this.base)
      .map(response => response.json());
  }

  getPoll(id: string | number): Observable<Question> {
    return this._http.get(`${ this.base }/${ id }`)
      .map(response => response.json());
  }

  createPoll(poll: Question){ 
    console.log(poll);
    return this._http.post(this.base, poll)
      .map(
        response=> response.json());
  }
    update(poll: Question, callback: Function){
      console.log('Here Now');
      console.log(poll);
      this._http.put(this.base+'/'+poll._id, poll)
        .subscribe(
          response=> callback(response.json()),
          )
  }
  search(inquiry){
    console.log("Search for "+ inquiry);
    return this._http.post(this.base+'/search/'+inquiry,inquiry)
    .map(response=>response.json());
  }
  deletePoll(id, callback: Function){
    console.log('Deleting in Service');
    console.log(id);
    this._http.delete(`${ this.base }/${ id }`)
    .subscribe(
      response=> callback(response.json()),
      err => {console.log('error deleting post', err)}
      )
  }

}