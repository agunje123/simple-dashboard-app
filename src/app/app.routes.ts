import { Routes } from '@angular/router';
import { PageDashboard } from './domains/dashboard/page-dashboard';
import { PageTable } from './domains/table/page-table';

//Eager loading because of size of the app.
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: PageDashboard
  },
  {
    path: 'table',
    component: PageTable
  }
];
