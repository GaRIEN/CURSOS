import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  imgProduct: { id: number; title: string; price: number; img: string }[] = [
    {
      id: 1,
      title: 'product 1',
      price: 250,
      img: 'https://picsum.photos/640/640?r=23',
    },

    {
      id: 2,
      title: 'product 2',
      price: 200,
      img: 'https://picsum.photos/640/640?r=20',
    },
    {
      id: 3,
      title: 'product 3',
      price: 50,
      img: 'https://picsum.photos/640/640?r=21',
    },
    {
      id: 4,
      title: 'product 4',
      price: 450,
      img: 'https://picsum.photos/640/640?r=28',
    },
  ];

  fromChild(event: string) {
    console.log('llego al padre');
    console.log(event);
  }
}
