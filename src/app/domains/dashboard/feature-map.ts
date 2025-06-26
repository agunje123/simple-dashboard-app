import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

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
  private map!: L.Map;
  startingPoint: L.LatLngExpression = [45.8033796, 16.0050284];

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap() {
    this.map = L.map('map', {
      center: this.startingPoint,
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
    L.marker(this.startingPoint).bindPopup('Hello world!').openPopup().addTo(this.map);
  }
}
