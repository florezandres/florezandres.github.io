import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
