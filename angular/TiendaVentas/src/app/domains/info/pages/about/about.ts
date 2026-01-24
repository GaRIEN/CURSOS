import { Component, signal } from '@angular/core';
import { Counter } from '../../../shared/components/counter/counter'
import { WaveAudio } from '../../components/wave-audio/wave-audio'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule, Counter, WaveAudio],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  duration = signal(1500);
  message = signal("Hola mundo");


  changeDuration(duration: number){
    this.duration.set(duration)
  }

  changeMessage(message: string){
    this.message.set(message)
  }
}
