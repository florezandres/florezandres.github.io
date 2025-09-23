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
  maximizeWindow() { this.maximize.emit(); }
  closeWindow() { this.close.emit(); }
  /*
  minimizeWindow() {
    const window = document.getElementById();
    if (window) {
      window.style.display = 'none';
    }
  }

  lastTransform: string | null = null;

  maximizeWindow() {
    const win = document.getElementById(id);
    if (!win) return;

    if (!this.maximized) {
      // Guardar posición actual antes de maximizar
      this.lastTransform = win.style.transform;

      this.maximized = true;
      win.classList.add('maximized');
      win.style.transform = 'none'; // reset para que obedezca el CSS maximizado
    } else {
      // Restaurar posición guardada
      this.maximized = false;
      win.classList.remove('maximized');

      if (this.lastTransform) {
        win.style.transform = this.lastTransform;
      }
    }
  }

  closeWindow(id: string) {
    const window = document.getElementById(id);
    if (window) {
      window.remove();
    }
  }
*/
}