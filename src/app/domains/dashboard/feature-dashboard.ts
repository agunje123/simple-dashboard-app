import { Component } from '@angular/core';
import { FeatureMap } from './feature-map';
import { FeatureLocationList } from './feature-location-list';

@Component({
  selector: 'app-feature-dashboard',
  imports: [FeatureMap, FeatureLocationList],
  template: `<div class="flex"><app-feature-map /> <app-feature-location-list /></div>`,
  styles: ``
})
export class FeatureDashboard {}
