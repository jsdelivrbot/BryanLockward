import { Component } from '@angular/core';
import {Users} from './user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:Users=new Users();
  saveUser:Users;

  onSubmit(event:Event,form:NgForm)
  {
    event.preventDefault();
    this.saveUser=this.user;
    console.log(this.saveUser)
    
    
  }
}
