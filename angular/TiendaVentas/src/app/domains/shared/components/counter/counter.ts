import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = "";
  counter = signal(0);
  counterRef:number | undefined;

  
  constructor() {
    console.log("EL CONSTRUCTOR")
    console.log("=".repeat(10))
  }

  ngOnChanges( changes: SimpleChanges){
    //Antes y durante del render
    console.log("EL ngOnchanges")
    console.log("=".repeat(10))
    console.log(changes);
    const prueba = changes['duration'];
    console.log("prueba",prueba);
    if (prueba && prueba.currentValue !== prueba.previousValue) {
      this.doSomething()
    }

    
  }

  //el  que mas se usa

  ngOnInit(){
    //inicializador componente
    //solo se recorre una vez
    //async /then / subs
    console.log("corre primero el ngOnInit");
    console.log("=".repeat(10))
    console.log("==>"+ this.duration);
    console.log("==>" + this.message);
    this.counterRef = window.setInterval(() => {
      console.log("run interval");
      this.counter.update(statePrev => statePrev + 1);

    }, 1000);
  }

  ngAfterViewInit(){
    //after render 
    //hijos ya fueron renderizados?
    console.log("ngAfterViewInit");
    console.log("=".repeat(10))
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    console.log("=".repeat(10))
    window.clearInterval(this.counterRef);
  }
  doSomething(){
    console.log("doSomething");
    console.log("=".repeat(10))
  }

}
