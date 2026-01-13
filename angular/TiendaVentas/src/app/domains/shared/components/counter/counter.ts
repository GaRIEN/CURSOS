import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = "";
  constructor() {
    console.log("EL CONSTRUCTOR")
    console.log("=".repeat(10))
  }

  ngOnChanges( changes: SimpleChange){
    //Antes y durante del render
    console.log("EL ngOnchanges")
    console.log("=".repeat(10))
    console.log(changes);
  }

}
