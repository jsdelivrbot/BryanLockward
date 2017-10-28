import { MainComponent } from './main/main.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonDcComponent } from './washington-dc/washington-dc.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '', component: MainComponent , pathMatch: 'full' },
    { path: 'seattle', component: SeattleComponent },
    { path: 'sanjose', component: SanJoseComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'dc', component: WashingtonDcComponent },
    { path: 'chicago', component: ChicagoComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);