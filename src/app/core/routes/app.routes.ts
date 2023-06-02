import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'video-js',
    loadComponent: () => import('../../modules/video-js/video-js.component').then((m) => m.VideoJsComponent),
  }, {
    path: '',
    redirectTo: 'video-js',
    pathMatch: 'full'
  }

]
