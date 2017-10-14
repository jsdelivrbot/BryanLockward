import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 date:Date;

  onClick(val:number){
      this.date=new Date();
      this.date.setHours(this.date.getHours()+val);
  }
}
