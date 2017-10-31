import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Note} from '../note';
import {NoteService} from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  note:Note=new Note();
  constructor(private noteService: NoteService ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log(this.note);

    this.noteService.addNote(this.note)
      .then(note => { 
        console.log(note);
      });
    
    
  }

}
