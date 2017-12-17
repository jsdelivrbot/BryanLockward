import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newCity:String;
  constructor(private router: Router) { }
  
  onSubmit(event,form:NgForm)
  {
    event.preventDefault();
    console.log(this.newCity);
    this.router.navigateByUrl('new/'+this.newCity);
  }

}
