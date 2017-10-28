
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(city: string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=f12608e6944c23c8f9ec42b5fcfce154`)
      .map(response => response.json()).toPromise();
  }
}