import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [CdkDrag, CdkDragHandle]
})
export class Home implements OnInit, OnDestroy {
  readonly dragImports = [CdkDrag, CdkDragHandle];
  readonly isLoading = signal(true);
  readonly currentMessage = signal('Welcome to my portfolio!');
  readonly dots = signal('');
  private loadTimerId: ReturnType<typeof setTimeout> | undefined;
  private dotsTimerId: ReturnType<typeof setInterval> | undefined;
  private messageTimerId: ReturnType<typeof setTimeout> | undefined;
  private readonly assetsToPreload = [
    '/assets/images/pfp3.jpg',
    '/assets/icons/oobefldr_109.ico',
    '/assets/icons/location.ico',
    '/assets/icons/about.ico',
    '/assets/icons/skills.ico',
    '/assets/icons/projects.ico',
    '/assets/icons/contact.ico',
  ];

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

    void this.preloadAssets();
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

  private preloadAssets(): Promise<void> {
    return Promise.allSettled(this.assetsToPreload.map((assetUrl) => this.preloadAsset(assetUrl))).then(() => undefined);
  }

  private preloadAsset(assetUrl: string): Promise<void> {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve();
      image.onerror = () => resolve();
      image.src = assetUrl;
    });
  }
}

