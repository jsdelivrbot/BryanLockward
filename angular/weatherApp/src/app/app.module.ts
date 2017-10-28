import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { MainComponent } from './main/main.component';
import {WeatherService} from './weather-service.service';
import { routing } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    SeattleComponent,
    DallasComponent,
    SanJoseComponent,
    WashingtonDcComponent,
    ChicagoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
