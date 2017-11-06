import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './home/login/login.component'


import { VoteComponent } from './survey/vote/vote.component';
import { SurveyComponent } from './survey/survey.component';
import { NewQuestionComponent } from './survey/new-question/new-question.component';


const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'dashboard',
      
      children: [
        {
          path: '',
          component: SurveyComponent,
        },
        {
          path: 'create',
          component: NewQuestionComponent,
        },
        {
          path: 'poll/:id',
          component: VoteComponent,
        },
      ],
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
  
    exports: [RouterModule]
  })
  export class AppRoutingModule {}