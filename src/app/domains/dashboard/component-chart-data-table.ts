import { Component, effect, Input, Signal } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ChartData } from './data-chart-data-model';

@Component({
  selector: 'app-component-chart-data-table',
  standalone: true,
  template: `
    <div class="app-card-light overflow-auto h-100">
      <h1 class="card-title">Podaci</h1>
      <table mat-table [dataSource]="dataSource">
        @for (column of displayedColumns; track column) {
          <ng-container [matColumnDef]="column">
            <th mat-header-cell *matHeaderCellDef>{{ headerMap[column] }}</th>
            <td mat-cell *matCellDef="let element">{{ element[column] }}</td>
          </ng-container>
        }
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styles: [``],
  imports: [MatTableModule]
})
export class ComponentChartDataTable {
  @Input({ required: true }) data!: Signal<ChartData[]>;
  dataSource = new MatTableDataSource<ChartData>();

  constructor() {
    effect(() => {
      this.dataSource.data = this.data();
    });
  }

  headerMap: Record<string, string> = {
    hour: 'Sat',
    average: 'Prosjek'
  };

  displayedColumns = ['hour', 'average'];
}
