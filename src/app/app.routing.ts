import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  /*Ashish { path: '**', redirectTo: 'login' }*/
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
