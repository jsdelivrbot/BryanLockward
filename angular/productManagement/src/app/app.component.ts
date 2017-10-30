import { ProductService } from '././product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  constructor(private _productService: ProductService) {
    this._productService.updateProducts(this.products);
    this._productService.viewProducts.subscribe( (products) => {
      this.products = products;
    });
  }
}
