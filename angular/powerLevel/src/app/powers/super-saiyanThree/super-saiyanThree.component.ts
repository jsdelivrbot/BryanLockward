import { Component,Input,OnChanges} from '@angular/core';

@Component({
  selector: 'app-super-saiyanThree',
  templateUrl: './super-saiyanThree.component.html'
})
export class SuperSaiyanThreeComponent{
  constructor() { }
  @Input() power;
  message:string;

  ngOnChanges(){
    this.power=this.power*250;
    if(this.power==50000)
    {
      this.message="The One";
    }
    else if(this.power==25000)
    {
      this.message="superlative power";
    }
    else if(this.power>20000)
    {
      this.message="Superlative";
    }
    else if(this.power>9000)
    {
      this.message="Over 9000!";
    }
    else{
        this.message='';
    }

  }
  
}