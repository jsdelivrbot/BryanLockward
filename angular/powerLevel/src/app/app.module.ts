import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowersComponent } from './powers/powers.component';
import { HumanComponent } from './powers/human/human.component';
import { SaiyanComponent} from './powers/saiyan/saiyan.component';
import { SuperSaiyanComponent} from './powers/super-saiyan/super-saiyan.component';
import { SuperSaiyanTwoComponent} from './powers/super-saiyanTwo/super-saiyanTwo.component';
import { SuperSaiyanThreeComponent} from './powers/super-saiyanThree/super-saiyanThree.component';
import { SuperSaiyanFourComponent} from './powers/super-saiyanFour/super-saiyanFour.component';
@NgModule({
  declarations: [
    AppComponent,
    PowersComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyanTwoComponent,
    SuperSaiyanThreeComponent,
    SuperSaiyanFourComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
