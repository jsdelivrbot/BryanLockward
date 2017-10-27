
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { User } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  checkUser(username: string){
    return this.http.get(`https://api.github.com/users/${ username }`)
      .map(response => response.json()).toPromise();
  }
}