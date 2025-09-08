import { Component } from '@angular/core';
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
  
  mouseSound(){
    var audio = new Audio();
    audio.src = "assets/sounds/mouse-click.mp3";
    audio.load();
    audio.play();
  }

  ngOnInit(): void {
    window.addEventListener('click', this.mouseSound, false);
  }
}

