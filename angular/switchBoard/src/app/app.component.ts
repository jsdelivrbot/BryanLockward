import { Component, OnInit} from '@angular/core';
import {Switch} from './switch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  switchArr:Array<Switch>=[];

  ngOnInit(){
    for(let i=0;i<10;i++)
    {
      this.switchArr[i]={
        name:"ON",
        color:"green",
        id:i
      }
    }
  }
    onSwitch(val){
      if(this.switchArr[val].name==="ON"){
        this.switchArr[val]={
          name:"OFF",
          color:"red",
          id:val
        }
      }
      else{
        this.switchArr[val]={
          name:"ON",
          color:"green",
          id:val
        }
    }
  }
  
}
