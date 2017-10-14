import { Component } from '@angular/core';

import {Email} from './email'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails: Array<Email>=[
    {address:"Bill@gates.com",
    importance:"High",
    subject:"New Windows",
    content:"Windows 11 will launch in 2100"
  },
{
  address:"ada@lovelace.com",
  importance:"High",
  subject:"Programming",
  content:"Enchantress of Numbers"
},
{
  address:"john@carmac.com",
  importance:"Low",
  subject:"Updated Algo",
  content:"New Algorithm"
}];
}
