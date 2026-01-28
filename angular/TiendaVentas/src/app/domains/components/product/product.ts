import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../../shared/models/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  //comunicacion del padre al hijo
  @Input({ required: true }) product!: product ;
  //COMUNICACION HIJO A PADRE
  @Output() addtoCard = new EventEmitter();
 
  //mi funcion que enviara 
  addToCardHandler(){
    console.log ("click en la funcion de envio")
    this.addtoCard.emit("mensaje enviado desde el hijo" + this.product.title);
  }

}
