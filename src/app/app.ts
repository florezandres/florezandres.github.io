import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('florezandres.github.io');
  readonly showFooter = signal(false);

  constructor(private router: Router) {
    setTimeout(() => {
      this.showFooter.set(true);
    }, 3500);
  }

  ngOnInit() {
    if (!sessionStorage.getItem('bootupCompleted')) {
      sessionStorage.setItem('bootupCompleted', 'true');
      this.router.navigate(['/bootup']);
    }
  }
}
