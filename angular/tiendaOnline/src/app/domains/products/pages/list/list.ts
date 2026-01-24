import { Component } from '@angular/core';
import{Product} from '../../components/product/product'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule,Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  //recibe 
  onAddToCart(Event:string){
    console.log("padre y este es el titulo", Event)
  }
}
