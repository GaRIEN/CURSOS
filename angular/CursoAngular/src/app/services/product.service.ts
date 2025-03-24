import { Injectable } from '@angular/core';
import Product from '../models/Productus';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product:Product

  constructor() {
    this.product={
      name:'computer',
      price:1500,
      isForsale:true
    }
  }

  setProductName(name:string):void{
    this.product.name=name
  }
}
