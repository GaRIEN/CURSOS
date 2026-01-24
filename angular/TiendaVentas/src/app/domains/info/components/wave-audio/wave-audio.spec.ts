import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveAudio } from './wave-audio';

describe('WaveAudio', () => {
  let component: WaveAudio;
  let fixture: ComponentFixture<WaveAudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveAudio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveAudio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
