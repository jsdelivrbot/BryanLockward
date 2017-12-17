import { MainComponent } from './main/main.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { NewYorkComponent } from './new-york/new-york.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [

    { path: '', component: MainComponent , pathMatch: 'full'},
    { path: 'new/:city', component: MainComponent , pathMatch: 'full'},
    { path: 'newyork', component: NewYorkComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'chicago', component: ChicagoComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);