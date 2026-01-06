import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
// imagenes = 'https://picsum.photos/640/640?r='+ Math.random();
 @Input({required: true}) imagen:string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) title: string = '';
}
