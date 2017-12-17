import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { NewYorkComponent } from './new-york/new-york.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { MainComponent } from './main/main.component';
import {WeatherService} from './weather-service.service';
import { routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    DallasComponent,
    NewYorkComponent,
    ChicagoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
