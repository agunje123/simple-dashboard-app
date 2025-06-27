import { Component, effect, Input, Signal } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ChartData } from './data-chart-data-model';

@Component({
  selector: 'app-ui-table',
  standalone: true,
  template: `
    <div class="app-card-light overflow-auto h-100 w-50">
      <h1 class="card-title">Podaci</h1>
      <table mat-table [dataSource]="dataSource">
        <ng-container matColumnDef="hour">
          <th mat-header-cell *matHeaderCellDef>Sat</th>
          <td mat-cell *matCellDef="let element">{{ element.hour }}</td>
        </ng-container>

        <ng-container matColumnDef="average">
          <th mat-header-cell *matHeaderCellDef>Prosjek</th>
          <td mat-cell *matCellDef="let element">{{ element.average }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styles: [``],
  imports: [MatTableModule]
})
export class TableProductComponent {
  @Input({ required: true }) data!: Signal<ChartData[]>;
  dataSource = new MatTableDataSource<ChartData>();

  constructor() {
    effect(() => {
      this.dataSource.data = this.data();
    });
  }

  displayedColumns = ['hour', 'average'];
}
