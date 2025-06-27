import { AfterViewInit, Component, effect, Input, WritableSignal } from '@angular/core';
import * as L from 'leaflet';
import { Location } from './data-location-model';

@Component({
  selector: 'app-feature-map',
  imports: [],
  template: `
    <div class="app-card-light h-100 w-200">
      <div id="map" style="height: 100%;width: 100%;" class="rounded-2xl"></div>
    </div>
  `,
  styles: ``
})
export class FeatureMap implements AfterViewInit {
  @Input() location!: WritableSignal<Location | undefined>;
  private marker?: L.Marker;
  private map!: L.Map;
  private startingLocation: Location = { latlng: [45.8033796, 16.0050284], name: 'Zagreb' };
  private markerIcon = {
    icon: L.icon({
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40],
      iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-shadow.png'
    })
  };

  constructor() {
    effect(() => {
      const location = this.location();
      if (location) {
        this.panToMarker(location);
      }
    });
  }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap() {
    this.map = L.map('map', {
      center: this.startingLocation.latlng,
      zoom: 18
    });
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 16
      }
    ).addTo(this.map);
    this.createMarkerWithPopup(this.startingLocation);
  }

  private createMarkerWithPopup(location: Location) {
    if (this.marker) {
      this.marker.remove();
    }

    this.marker = L.marker(location.latlng, this.markerIcon)
      .bindPopup(location.name)
      .addTo(this.map);
    this.marker.openPopup();
  }

  private panToMarker(location: Location) {
    this.createMarkerWithPopup(location);
    this.map.panTo(location.latlng);
  }
}
