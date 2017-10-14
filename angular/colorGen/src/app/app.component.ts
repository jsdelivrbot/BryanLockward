import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  color:Array<string>=["red","blue","green","pink","yellow","orange","black"];
  
    ngOnInit(){
      for (let i = 0; i < 6; i++) {
        let x=(Math.floor(Math.random() * 6) );
        let holder=this.color[x];
        this.color[x]=this.color[i];
        this.color[i]=holder;
      }
  
    }
}
