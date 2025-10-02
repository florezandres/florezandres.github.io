import { Component, HostListener } from '@angular/core';
import { MainPageComponent } from '../../components/main-page/main-page.component';
import { CropYieldPredictionComponent } from "../../components/crop-yield-prediction/crop-yield-prediction.component";
import { WindowComponent } from '../../components/window/window.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  imports: [WindowComponent, CommonModule, DragDropModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mainPage = document.getElementById('main-page') as HTMLElement;
  lastActiveWindow: boolean = true;
  indexCounter = 2;
  maximized = false;

  windows = [
  { 
    id: 'main-page', 
    title: 'Welcome to my Portafolio98!', 
    component: MainPageComponent 
  }
  ,
  { 
    id: 'crop-yield-prediction', 
    title: 'Predicción de rendimiento de cultivo', 
    component: CropYieldPredictionComponent 
  }
];
  
  @HostListener('click', ['$event'])
  activeWindow(event: Event) {
    const target = event.target as HTMLElement;
    const windowParent = target.closest('.window') as HTMLElement;
    if (windowParent) {
      if (this.lastActiveWindow) {
        const oldWindowParent = document.querySelector('.window.active') as HTMLElement;
        if (oldWindowParent) {
          oldWindowParent.classList.remove('active');
          oldWindowParent.style.zIndex = String(this.indexCounter-1);
        }
      }
      windowParent.classList.add('active');
      windowParent.style.zIndex = String(this.indexCounter);
      this.lastActiveWindow = true;
    }
  }

  minimizeWindow(id: string) {
    const window = document.getElementById(id);
    if (window) {
      window.style.display = 'none';
    }
  }

  lastTransform: string | null = null;

  maximizeWindow(id: string) {
    console.log(id);
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
}

