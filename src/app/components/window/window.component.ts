import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-window',
  imports: [DragDropModule],
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
})

export class WindowComponent {

  mainPage = document.getElementById('main-page') as HTMLElement
  indexCounter = 2

  ngOnInit() {
    document.getElementById('main-page')?.classList.add('active'); 
  }
  
  @Input() title: string = '';
  @Input() windowId: string = '';
  maximized = false;
  
  @Output() minimize = new EventEmitter<void>();
  @Output() maximize = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  //@HostBinding('class.window') hostClass = true;
  //@HostBinding('attr.id') get id() { return this.windowId; }

  minimizeWindow() { this.minimize.emit(); }
  maximizeWindow() { this.maximize.emit(); 
    const img = document.getElementById('restore-button')?.querySelector('img');
    if (img) {
      img.src = 'assets/images/restore.png';
    }
  }
  closeWindow() { this.close.emit(); }
}