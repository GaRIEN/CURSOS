import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Products } from '../../../shared/models/products.models';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Products[]>([]);

  constructor() {
    const initProduct: Products[] = [
      {
        id: Date.now(),
        title: 'product 1',
        price: 250,
        img: 'https://picsum.photos/640/640?r=23',
        create: new Date().toISOString(),
      },

      {
        id: Date.now(),
        title: 'product 2',
        price: 200,
        img: 'https://picsum.photos/640/640?r=20',
        create: new Date().toISOString(),
      },
    ];

    this.products.set(initProduct);
  }

  fromChild(event: string) {
    console.log('llego al padre');
    console.log(event);
  }
}
