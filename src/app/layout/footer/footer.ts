import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  onFooterImageClick() {
    // show taskbar with id+taskbar
    const taskbar = document.getElementById('taskbar-menu');
    if (taskbar) {
      if (taskbar.style.display === 'flex') {
        taskbar.style.display = 'none';
      } else {
        taskbar.style.display = 'flex';
      }
    }
  }

  onLanguageIconClick() {
    const languageOptions = document.getElementById('language-options');
    if (languageOptions) {
      if (languageOptions.style.display === 'flex') {
        languageOptions.style.display = 'none';
      } else {
        languageOptions.style.display = 'flex';
      }
    }
  }

  currentTime: Date = new Date();

  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  ngOnInit() {
    const languagetooltip = document.getElementById('language-tooltip');
    if (languagetooltip) {
      // Show after delay: add .visible (CSS sets display:flex and runs slideUp)
      setTimeout(() => {
        languagetooltip.classList.add('visible');
        // accessibility: mark visible
        languagetooltip.setAttribute('aria-hidden', 'false');
      }, 3500);

      // After 12s, start hiding: add .hiding to run slideDown; on animation end remove classes
      setTimeout(() => {
        const onAnimEnd = (e: AnimationEvent) => {
          if (e.animationName === 'slideDown') {
            // hide at style level to ensure it disappears after animation
            (languagetooltip as HTMLElement).style.display = 'none';
            languagetooltip.classList.remove('visible', 'hiding');
            languagetooltip.removeEventListener('animationend', onAnimEnd as any);
          }
        };
        languagetooltip.addEventListener('animationend', onAnimEnd as any);
        // accessibility: mark hidden immediately so assistive tech ignores it
        languagetooltip.setAttribute('aria-hidden', 'true');
        // start hiding animation
        languagetooltip.classList.add('hiding');
      }, 12000);
    }
  }

  
  changeLanguage(lang: string) {
    // Implement language change logic here
    console.log(`Language changed to: ${lang}`);
  }

  toggleTheme() {

  }
}
