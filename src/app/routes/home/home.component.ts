import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';
import { MainPageComponent } from '../../components/main-page/main-page.component';
import { b } from "../../../../node_modules/@angular/cdk/bidi-module.d-D-fEBKdS";

@Component({
  selector: 'app-home',
  imports: [RouterLink, CdkDrag, CdkDragHandle, MainPageComponent, b],
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

  minimizeWindow(id: string) {
    const window = document.getElementById(id);
    if (window) {
      window.style.display = 'none';
    }
  }

  maximizeWindow(id: string) {
    const window = document.getElementById(id);
    if (window) {
      window.style.position = 'fixed';
      window.style.top = '0';
      window.style.left = '0';
      window.style.width = '100vw';
      window.style.height = '100vh';
    }
  }

  closeWindow(id: string) {
    const window = document.getElementById(id);
    if (window) {
      window.remove();
    }
  }
}
