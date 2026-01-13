import { Component, signal } from '@angular/core';
import { Counter } from '../../../shared/components/counter/counter'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Counter],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  duration = signal(1500);
  message = signal("Hola mundo");
  counter = signal(0);

  changeDuration(duration: number){
    this.duration.set(duration)
  }

  changeMessage(message: string){
    this.message.set(message)
  }
}
