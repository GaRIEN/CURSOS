import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../../shared/models/products.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Products;

  // para comunicacion de hijo  a padre
  @Output() addToCard = new EventEmitter<string>();

  addToCartHandler() {
    console.log('click form child');
    this.addToCard.emit(
      'este es el mensaje del hijo para el padre' + this.product.title
    );
  }
}
