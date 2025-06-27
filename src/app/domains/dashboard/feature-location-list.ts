import { Component, EventEmitter, Output } from '@angular/core';
import { Location } from './data-location-model';

@Component({
  selector: 'app-feature-location-list',
  imports: [],
  template: ` <div class="app-card-light h-100 overflow-auto">
    <h1 class="card-title">Lokacije</h1>
    <ul class="list-none">
      @for (location of locations; track location) {
        <li>
          <button class="btn-primary mb-2 w-full" (click)="addMarker(location)">
            {{ location.name }}
          </button>
        </li>
      }
    </ul>
  </div>`,
  styles: ``
})
export class FeatureLocationList {
  @Output() selectedLocation = new EventEmitter<Location>();

  locations: Location[] = [
    { name: 'Zagreb', latlng: [45.8033796, 16.0050284] },
    { name: 'Split', latlng: [43.508133, 16.440193] },
    { name: 'Rijeka', latlng: [45.327063, 14.442176] },
    { name: 'Osijek', latlng: [45.554962, 18.695514] },
    { name: 'Zadar', latlng: [44.119371, 15.231365] },
    { name: 'Pula', latlng: [44.866623, 13.849579] },
    { name: 'Dubrovnik', latlng: [42.650661, 18.094424] },
    { name: 'Šibenik', latlng: [43.73502, 15.88987] },
    { name: 'Varaždin', latlng: [46.305744, 16.336606] },
    { name: 'Karlovac', latlng: [45.492912, 15.555555] }
  ];

  addMarker(location: Location) {
    this.selectedLocation.emit(location);
  }
}
