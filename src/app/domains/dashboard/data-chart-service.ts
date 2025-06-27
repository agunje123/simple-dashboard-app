import { inject, Injectable, Signal } from '@angular/core';
import { ChartData } from './data-chart-data-model';
import { IntervalData } from './data-interval-data-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class DataChartService {
  private http = inject(HttpClient);

  /**
   * Fetches data from assets folder and transforms it.
   * @returns An observable which has ChartData.
   */
  getHourlyAverageDataSignal(): Signal<ChartData[]> {
    return toSignal(
      this.http
        .get<Record<string, IntervalData[]>>('/assets/podaci.json')
        .pipe(map((data) => this.calculateHourlyAverageData(data))),
      { initialValue: [] }
    );
  }

  /**
   * Calculates the average value for each hour from the provided data.
   * @param data - An object where each key is an hour (string) and the value is an array of IntervalData.
   * @returns An array of objects with the hour and its average value.
   */
  private calculateHourlyAverageData(data: Record<string, IntervalData[]>): ChartData[] {
    const result: ChartData[] = [];

    for (const hour in data) {
      const intervals = data[hour];
      const values = intervals.map((interval) => interval.value);
      const sum = values.reduce((total, value) => total + value, 0);
      const average = values.length > 0 ? Number((sum / values.length).toFixed(2)) : 0;

      result.push({ hour: this.formatHour(hour), average });
    }

    return result;
  }

  /**
   * Changes date format to be more readable.
   * @param isoString - date in string format.
   * @returns Formatted date string.
   */
  private formatHour(isoString: string): string {
    const date = new Date(isoString);
    return date.toLocaleString('hr-HR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }
}
