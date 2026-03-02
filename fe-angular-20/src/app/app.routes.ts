import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
        title: 'Home',
      },
      {
        path: 'inputs',
        loadComponent: () => import('./pages/inputs/inputs').then((m) => m.Inputs),
        title: 'Inputs',
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];