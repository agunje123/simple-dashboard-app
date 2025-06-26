import { Component } from '@angular/core';
import { FeatureMap } from './feature-map';

@Component({
  selector: 'app-feature-dashboard',
  imports: [FeatureMap],
  template: `<app-feature-map />`,
  styles: ``
})
export class FeatureDashboard {}
