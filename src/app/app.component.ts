import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from './layout/taskbar/taskbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';

  private audio = new Audio('assets/sounds/click.mp3');

  constructor() {
    this.audio.load();
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains("window-title")){
      console.log('no sound');
      return;
    }
    else{
      this.audio.currentTime = 0;
      this.audio.play();
    }
  }
}

