import { Routes } from '@angular/router';
import { FeatureDashboard } from './domains/dashboard/feature-dashboard';
import { FeatureTable } from './domains/table/feature-table';

//Eager loading because of size of the app.
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: FeatureDashboard
  },
  {
    path: 'table',
    component: FeatureTable
  }
];
