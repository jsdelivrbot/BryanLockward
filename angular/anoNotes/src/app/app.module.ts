import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import {NoteService} from './note.service';
@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    DisplayNotesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
