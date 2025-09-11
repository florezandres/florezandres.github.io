import { Component } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  imports: [],
  templateUrl: './taskbar.component.html',
  styleUrl: './taskbar.component.css'
})
export class TaskbarComponent {
  time: string = '';

  constructor() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  ngOnInit() {
    
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = now.getHours() < 12 ? 'AM' : 'PM';
    if (ampm === 'PM' && hours !== '12') {
      this.time = `${(parseInt(hours) - 12).toString().padStart(2, '0')}:${minutes} ${ampm}`;
    } else if (ampm === 'AM' && hours === '12') {
      this.time = `12:${minutes} ${ampm}`;
    } else {
      this.time = `${hours}:${minutes} ${ampm}`;
    }
  }
}
