import { Product } from './product';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ProductService {
  viewProducts= new BehaviorSubject(null);

  constructor() { }

  updateProducts(products: Array<Product>) {
    this.viewProducts.next(products);
  }

}