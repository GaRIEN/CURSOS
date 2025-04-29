import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  viewCard=signal(true);

  viewCardHandler() {
    this.viewCard.update(prev => !prev);

  }

}
