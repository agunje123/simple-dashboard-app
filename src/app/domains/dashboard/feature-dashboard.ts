import { Component, inject, Signal, signal } from '@angular/core';
import { FeatureMap } from './feature-map';
import { FeatureLocationList } from './feature-location-list';
import { Location } from './data-location-model';
import { UiChart } from './ui-chart';
import { DataChartService } from './data-chart-service';
import { ChartData } from './data-chart-data-model';
import { TableProductComponent } from './ui-table';

@Component({
  selector: 'app-feature-dashboard',
  imports: [FeatureMap, FeatureLocationList, UiChart, TableProductComponent],
  template: ` <div class="grid grid-cols-1 md:grid-cols-4 h-100">
    <app-feature-map [location]="selectedLocation" class="md:col-span-3" />
    <app-feature-location-list
      (selectedLocation)="selectedLocation.set($event)"
      class="md:col-span-1"
    />
    <app-ui-table [data]="chartDataSignal" class="md:col-span-1" />
    <app-ui-chart [data]="chartDataSignal" class="md:col-span-3" />
  </div>`,
  styles: ``
})
export class FeatureDashboard {
  chartService = inject(DataChartService);
  selectedLocation = signal<Location | undefined>(undefined);
  chartDataSignal: Signal<ChartData[]> = this.chartService.getHourlyAverageDataSignal();
}
