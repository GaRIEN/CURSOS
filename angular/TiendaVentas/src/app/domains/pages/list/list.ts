import { Component, signal } from '@angular/core';
import { Product } from '../../components/product/product'
import { product } from '../../../domains/shared/models/product.model'

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  products = signal<product[]>([]);

  constructor() {
    const initProducts: product[] = [
      {
        id: crypto.randomUUID(),
        title: "Producto 1",
        price: 12.00,
        image: "https://picsum.photos/640/640?r=1",
        createAt: "2023-10-15"
      },
      {
        id: crypto.randomUUID(),
        title: "Producto 2",
        price: 14.00,
        image: "https://picsum.photos/640/640?r=15",
        createAt: "2023-10-17"
      }
    ]
    this.products.set(initProducts);
  }

  onAddtoCard(event: string) {
    console.log("Evento recibido desde el hijo:", event);
  }
}
