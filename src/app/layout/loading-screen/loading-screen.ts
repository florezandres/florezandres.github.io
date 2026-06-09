import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  imports: [],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.css',
})
export class LoadingScreen implements OnInit {
  ngOnInit() {
    try {
      const audio = new Audio('/assets/mp3/windows-vista-startup.mp3');
      audio.play().catch(() => {});
    } catch (e) {
    }
    setTimeout(() => {
      window.location.href = '/';
    }, 4000);
  }
}
