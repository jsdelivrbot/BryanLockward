import { Component, OnInit } from '@angular/core';
import {Weather} from '../weather';
import {WeatherService} from '../weather-service.service';
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather:Weather=new Weather();
  
  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.weather.city="Burbank";
    let newWeather=this.service.getWeather(this.weather.city)
    .then( newWeather=>{
      this.weather.temp=newWeather.main.temp;
      this.weather.maxTemp=newWeather.main.temp_max;
      this.weather.minTemp=newWeather.main.temp_min;
      this.weather.humidity=newWeather.main.humidity;
      this.weather.condition=newWeather.weather[0].main;
    })
    console.log(this.weather);
  }

}
