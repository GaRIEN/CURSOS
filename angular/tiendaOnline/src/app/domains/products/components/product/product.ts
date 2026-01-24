import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({ required: true }) imagen: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) title: string = '';
  //OUPTUS 
  //creamos unasalida o comunicacion de hijo a padre con el nombre addtoCart
  @Output() addToCart = new EventEmitter();
  //funcion que enviara
  addToCartHandler() {
    console.log("Click en la funcion  ")
    this.addToCart.emit("Hola este mensaje viene del hijo"+ this.title)
  }
}
