import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css',
})
export class WaveAudio implements AfterViewInit {

  @Input({ required: true }) url!: string;
  @ViewChild('waveSurferContainer')
  waveSurferContainer!: ElementRef<HTMLDivElement>;

  public ws!: WaveSurfer;

  ngAfterViewInit(): void {
    this.ws = WaveSurfer.create({
      container: this.waveSurferContainer.nativeElement,
      url: this.url,
      height: 80,
      waveColor: '#a5b4fc',
      progressColor: '#4f46e5',
    });

    this.ws.on('ready', () => {
      console.log('Audio listo');
    });
  }

  playPause(): void {
    if (!this.ws) return;
    this.ws.playPause();
  }
}
