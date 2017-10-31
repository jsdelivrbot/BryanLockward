import { Component, OnInit } from '@angular/core';
import {Note} from '../note';
import {NoteService} from '../note.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  notes:Array<Note>=[];
  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.noteService.listNotes()
      .then(notes=>{
        console.log("Hello");
        this.notes=notes;
      })
  }

}
