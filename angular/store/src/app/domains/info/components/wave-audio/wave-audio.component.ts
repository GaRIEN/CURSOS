import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import waveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css',
})
export class WaveAudioComponent {

  @Input ({required:true}) audioUrl!:string;
  @ViewChild('wave') container!:ElementRef;
  private ws!:waveSurfer
  isplaying=signal(false)

  ngAfterViewInit(){
    this.ws=waveSurfer.create({
      url:this.audioUrl,
      container:this.container.nativeElement
    })
    this.ws.on('play', () => this.isplaying.set(true));
    this.ws.on('pause', () => this.isplaying.set(false));
  }

  playAudio(){
    console.log('click en play');
    this.ws.playPause()
  }
}
