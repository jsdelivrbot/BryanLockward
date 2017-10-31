
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {Note} from './note';

@Injectable()
export class NoteService {
  private base='/api/notes';

  constructor(private http: Http) {}

  listNotes() {
    return this.http.get('/api/notes')
      .map(response => response.json()).toPromise();
  }
  addNote(note: Note){
    return this.http.post('/api/add', note)
      .map(response => response.json()).toPromise();
  }
}
