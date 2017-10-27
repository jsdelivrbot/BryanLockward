import { Component } from '@angular/core';
import {User} from './user';
import {NgForm} from '@angular/forms';
import {GithubService} from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newUser:User=new User();
 
  constructor(private service: GithubService) {}

  onSubmit(event,form:NgForm)
  {
    event.preventDefault();
    console.log(this.newUser);
    let user=this.service.checkUser(this.newUser.userName)
    .then( user=>{
      this.newUser.score=user.public_repos + user.followers;
    })
    .catch(err=>{
      this.newUser.error="User Not Found";
    })

    this.newUser= new User();
  }
  
}
