import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from "../../components/wave-audio/wave-audio.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  duration = signal(100);
  message = signal('hola');

  changeDuration(event: Event) {
    const input = (event.target as HTMLInputElement).valueAsNumber;
    this.duration.set(input);
  }
  changeMessage(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.message.set(input);
  }
}
