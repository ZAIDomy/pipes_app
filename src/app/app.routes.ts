import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'basic',
        title: 'Pipes Basicos',
        loadComponent: () => import('./pages/basic-page/basic-page.component'),
    },
];
