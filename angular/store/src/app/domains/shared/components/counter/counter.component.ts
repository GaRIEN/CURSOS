import { CommonModule } from '@angular/common';
import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',

})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;
  constructor() {
    //NO ASYNC
    //BEFORE RENDER
    console.log('constructor');
    console.log('--'.repeat(10));
  }

  //detect changes
  ngOnChanges(changes: SimpleChanges) {
    //before and during render
    console.log('ngonchanges');
    console.log('--'.repeat(10));
    console.log(changes);

    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //after render
    //solo una vez
    //async,then,subs
    console.log('ngOnInit');
    console.log('--'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }
  ngAfterViewInit() {
    //after render
    //solo una vez
    //hijos ya fueron pintados
    console.log('ngAfterViewInit');
    console.log('--'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    if (this.counterRef) {
      window.clearInterval(this.counterRef);
    }
  }

  doSomething() {
    console.log('detectando cambios si esta o no ');
  }
}
