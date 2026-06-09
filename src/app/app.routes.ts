import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./routes/home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () => import('./routes/about/about').then(m => m.About)
    },
    {
        path: 'bootup',
        loadComponent: () => import('./layout/loading-screen/loading-screen').then(m => m.LoadingScreen)
    }

];
