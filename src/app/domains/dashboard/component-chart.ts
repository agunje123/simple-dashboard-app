import { Component, effect, Input, OnInit, Signal } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartData } from './data-chart-data-model';

@Component({
  selector: 'app-component-chart',
  imports: [],
  template: ` <div class="app-card-light overflow-auto h-100">
    <h1 class="card-title">Graf</h1>
    <div class="chart-container">
      <canvas id="MyChart">{{ chart }}</canvas>
    </div>
  </div>`,
  styles: ``
})
export class ComponentChart implements OnInit {
  @Input({ required: true }) data!: Signal<ChartData[]>;
  chart!: Chart;

  constructor() {
    effect(() => {
      if (this.chart && this.data()) {
        this.updateChart();
      }
    });
  }

  ngOnInit(): void {
    this.createChart();
  }

  private createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: this.data() ? this.data().map((d) => d.hour) : [],
        datasets: [
          {
            label: 'Prosjek',
            data: this.data() ? this.data().map((d) => d.average) : []
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  private updateChart() {
    this.chart.data.labels = this.data() ? this.data().map((d) => d.hour) : [];
    this.chart.data.datasets[0].data = this.data() ? this.data().map((d) => d.average) : [];
    this.chart.update();
  }
}
