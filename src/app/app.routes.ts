import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./routes/home/home').then(m => m.Home)
    },
    {
        path: 'bootup',
        loadComponent: () => import('./layout/loading-screen/loading-screen').then(m => m.LoadingScreen)
    }
];
