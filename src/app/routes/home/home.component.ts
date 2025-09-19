import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';
import { MainPageComponent } from '../../components/main-page/main-page.component';
import { b } from "../../../../node_modules/@angular/cdk/bidi-module.d-D-fEBKdS";
import { max } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CdkDrag, CdkDragHandle, MainPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  maximized = false;

  minimizeWindow(id: string) {
    const window = document.getElementById(id);
    if (window) {
      window.style.display = 'none';
    }
  }

lastTransform: string | null = null;

maximizeWindow(id: string) {
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
