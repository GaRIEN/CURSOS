import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) img: string = '';

  // para comunicacion de hijo  a padre
  @Output() addToCard = new EventEmitter<string>();

  addToCartHandler() {
    console.log('click form child');
    this.addToCard.emit('este es el mensaje del hijo para el padre' + this.title);
  }
}
