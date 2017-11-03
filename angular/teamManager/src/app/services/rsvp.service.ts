import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Rsvp } from '../models/rsvp';



@Injectable()
export class RsvpService {

  base: string = 'http://localhost:8000/api/rsvps';
  rsvpSubject = new Subject<Rsvp[]>();

  constructor(private _http: Http) {
    this.refreshRsvps();
  }

  refreshRsvps(): void{
    let url = this.base;
    this._http.get(url)
      .subscribe(response => {
        this.rsvpSubject.next(response.json());
      })
  }

  getRsvps(): Observable<Rsvp[]>{
    this.refreshRsvps();
    return this.rsvpSubject.asObservable()
  }

  createRsvp(rsvp: Rsvp): void{
    let url = this.base;
    this._http.post(url, rsvp)
      .subscribe(
        newRsvp =>{
          this.refreshRsvps(); 
        },
        err => {console.log(err)}
        )
  }


}