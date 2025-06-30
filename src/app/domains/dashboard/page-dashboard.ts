import { Component, inject, Signal, signal } from '@angular/core';
import { Location } from './data-location-model';
import { DataChartService } from './data-chart-service';
import { ChartData } from './data-chart-data-model';
import { ComponentMap } from './component-map';
import { ComponentLocationList } from './component-location-list';
import { ComponentChart } from './component-chart';
import { ComponentChartDataTable } from './component-chart-data-table';

@Component({
  selector: 'app-page-dashboard',
  imports: [ComponentMap, ComponentLocationList, ComponentChart, ComponentChartDataTable],
  template: ` <div class="grid grid-cols-1 md:grid-cols-4 h-100">
    <app-component-map [location]="selectedLocation" class="md:col-span-3" />
    <app-component-location-list
      (selectedLocation)="selectedLocation.set($event)"
      class="md:col-span-1"
    />
    <app-component-chart-data-table [data]="chartDataSignal" class="md:col-span-1" />
    <app-component-chart [data]="chartDataSignal" class="md:col-span-3" />
  </div>`,
  styles: ``
})
export class PageDashboard {
  chartService = inject(DataChartService);
  selectedLocation = signal<Location | undefined>(undefined);
  chartDataSignal: Signal<ChartData[]> = this.chartService.getHourlyAverageDataSignal();
}
