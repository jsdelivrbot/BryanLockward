import { Component, OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Weather} from '../weather';
import {WeatherService} from '../weather-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnChanges {
  message:String;
  city:string;
  weather:Weather=new Weather();

  constructor( private _route: ActivatedRoute,private service: WeatherService) { 
  
    this._route.paramMap.subscribe( params => {
      this.city=params.get('city');
      console.log("City Search: "+this.city);
    })
  }
  ngOnInit(){
    if(!this.city){
      this.message="Please Choose A City";
    }
    else{
      this.newWeather(this.city);
      }
    }
    ngOnChanges(){
      this.newWeather(this.city);
    }

    newWeather(city){
      this.weather.city=this.city;
      let newWeather=this.service.getWeather(this.weather.city)
      .then( newWeather=>{
        console.log(newWeather);
        this.weather.temp=newWeather.main.temp;
        this.weather.maxTemp=newWeather.main.temp_max;
        this.weather.minTemp=newWeather.main.temp_min;
        this.weather.humidity=newWeather.main.humidity;
        this.weather.condition=newWeather.weather[0].main;
    })
  }
}

