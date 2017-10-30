import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {
  products:Array<Product>=[];

  constructor(private service: ProductService) { }

  ngOnInit() {
    console.log(this.service.viewProducts);
  }

}
