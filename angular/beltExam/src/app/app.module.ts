import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CookieService} from 'ngx-cookie';
import {CookieModule} from 'ngx-cookie'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';

import { AuthService } from './services/auth.service';
import { PollService } from './services/poll.service';

import { VoteComponent } from './survey/vote/vote.component';
import { SurveyComponent } from './survey/survey.component';
import { NewQuestionComponent } from './survey/new-question/new-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VoteComponent,
    SurveyComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    CookieModule.forRoot()
  ],
  providers: [  PollService,
    AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
