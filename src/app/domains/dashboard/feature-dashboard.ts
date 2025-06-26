import { Component, signal } from '@angular/core';
import { FeatureMap } from './feature-map';
import { FeatureLocationList } from './feature-location-list';
import { Location } from './data-model-location';

@Component({
  selector: 'app-feature-dashboard',
  imports: [FeatureMap, FeatureLocationList],
  template: ` <div class="flex">
    <app-feature-map [location]="selectedLocation" />
    <app-feature-location-list (selectedLocation)="selectedLocation.set($event)" />
  </div>`,
  styles: ``
})
export class FeatureDashboard {
  selectedLocation = signal<Location | undefined>(undefined);
}
