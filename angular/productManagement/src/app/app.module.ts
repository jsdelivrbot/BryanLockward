import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MainComponent } from './main/main.component';
import {routing} from './routing'
import {ProductService} from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ShowProductComponent,
    EditProductComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
