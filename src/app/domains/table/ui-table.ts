import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Pokemon } from './data-pokemon-model';
import { UtilPaginatorI18n } from '../../shared/util-paginator-i18n';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-ui-pokemon-table',
  standalone: true,
  template: `
    <div class="app-card-light overflow-auto">
      <h1 class="card-title">Pokemoni</h1>
      <table mat-table [dataSource]="dataSource">
        @for (column of displayedColumns; track column) {
          <ng-container [matColumnDef]="column">
            <th mat-header-cell *matHeaderCellDef>{{ headerMap[column] }}</th>
            <td mat-cell *matCellDef="let element">
              @switch (column) {
                @case ('type') {
                  {{ getTypes(element) }}
                }
                @case ('picture') {
                  <img [src]="element.sprites.front_default" alt="{{ element.name }}" width="50" />
                }
                @case ('actions') {
                  <button
                    matIconButton
                    class="mb-1"
                    matTooltip="Prikaži više"
                    (click)="onShowDetails(element)"
                  >
                    <mat-icon>search</mat-icon>
                  </button>
                }
                @default {
                  {{ element[column] }}
                }
              }
            </td>
          </ng-container>
        }
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        <tr class="mat-row" *matNoDataRow>
          <td class="mat-cell" [attr.colspan]="displayedColumns.length">Nema podataka!</td>
        </tr>
      </table>
      <mat-paginator
        [length]="100"
        [pageSize]="10"
        [pageSizeOptions]="[5, 10]"
        (page)="onPage($event)"
      />
    </div>
  `,
  styles: [``],
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatTooltipModule],
  providers: [{ provide: MatPaginatorIntl, useClass: UtilPaginatorI18n }]
})
export class UiTablePokemonComponent {
  @Input() set data(value: Pokemon[] | null) {
    this.dataSource = new MatTableDataSource<Pokemon>(value || []);
  }
  @Output() pagination = new EventEmitter<PageEvent>();
  @Output() showPokemonDetails = new EventEmitter<Pokemon>();
  dataSource = new MatTableDataSource<Pokemon>();

  headerMap: Record<string, string> = {
    id: 'ID',
    name: 'Naziv',
    height: 'Visina',
    weight: 'Težina',
    type: 'Tip',
    picture: 'Slika',
    actions: 'Akcije'
  };

  displayedColumns = ['id', 'name', 'height', 'weight', 'type', 'picture', 'actions'];

  getTypes(pokemon: Pokemon): string {
    return pokemon.types.map((t) => t.type.name).join(', ');
  }

  onPage(event: PageEvent) {
    this.pagination.emit(event);
  }

  onShowDetails(pokemon: Pokemon) {
    this.showPokemonDetails.emit(pokemon);
  }
}
