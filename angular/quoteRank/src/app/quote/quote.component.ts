import { Component } from '@angular/core';
import {Quote} from './quote';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html'
})
export class QuoteComponent{
  quotes:Array<Quote>=[];
  newQuote:Quote=new Quote();

  constructor() { }
  onSubmit(event,form:NgForm)
  {
    event.preventDefault();
    this.newQuote.like=0;
    console.log(this.newQuote);
    this.quotes.push(this.newQuote);
    console.log(this.quotes);
    this.newQuote=new Quote();
  }
}