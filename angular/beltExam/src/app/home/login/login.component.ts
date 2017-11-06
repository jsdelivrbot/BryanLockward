import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService,
            private _router: Router) { }

  errorMessages: String[];
  user: User = new User();
  
  ngOnInit() {

  }

  login(e: Event){
    e.preventDefault();
    this.errorMessages = undefined; 
    this._authService.login(this.user)
      .then((user) => {
        this._router.navigate(['/dashboard'])})
      .catch(()=>this.register(this.user))//if he not existing, register name in DB
      
      
  }

  

  register(user){
    console.log("registering");
    this._authService.register(this.user)
      .then(() => this._router.navigate(['dashboard']))
  }
}

  


