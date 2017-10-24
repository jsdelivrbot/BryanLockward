import { Component,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quoteDisplay',
  templateUrl: './quoteDisplay.component.html'
})
export class QuoteDisplayComponent{
@Input() quotes;
@Output() deleteQuoteEvent = new EventEmitter();

  constructor() { }
  
  like(q)
  {
      q.like+=1;
  }
  dislike(q)
  {
      q.like-=1;
  }
}