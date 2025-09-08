import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
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
