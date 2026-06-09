import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy {
  readonly isLoading = signal(true);
  readonly currentMessage = signal('Welcome to my portfolio!');
  readonly dots = signal('');
  private loadTimerId: ReturnType<typeof setTimeout> | undefined;
  private dotsTimerId: ReturnType<typeof setInterval> | undefined;
  private messageTimerId: ReturnType<typeof setTimeout> | undefined;

  ngOnInit() {
    this.messageTimerId = setTimeout(() => {
      this.currentMessage.set('Loading projects');
      
      let dotCount = 0;
      this.dotsTimerId = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        this.dots.set('.'.repeat(dotCount));
      }, 500);
    }, 2000);

    this.loadTimerId = setTimeout(() => {
      this.isLoading.set(false);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.loadTimerId !== undefined) {
      clearTimeout(this.loadTimerId);
    }
    if (this.messageTimerId !== undefined) {
      clearTimeout(this.messageTimerId);
    }
    if (this.dotsTimerId !== undefined) {
      clearInterval(this.dotsTimerId);
    }
  }
}

