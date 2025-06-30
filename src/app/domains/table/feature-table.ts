import { Component, inject } from '@angular/core';
import { DataPokemonService } from './data-pokemon-service';
import { MatTableModule } from '@angular/material/table';
import { UiTablePokemonComponent } from './ui-table';
import { PageEvent } from '@angular/material/paginator';
import { Pokemon } from './data-pokemon-model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { UiPokemonDialog } from './ui-pokemon-dialog';

@Component({
  selector: 'app-feature-table',
  imports: [MatTableModule, UiTablePokemonComponent, AsyncPipe],
  template: `<app-ui-pokemon-table
    [data]="pokemon$ | async"
    (showPokemonDetails)="onShowDetails($event)"
    (pagination)="onPage($event)"
  />`,
  styles: ``
})
export class FeatureTable {
  limit = 10;
  offset = 0;
  readonly dialog = inject(MatDialog);
  pokemonService = inject(DataPokemonService);
  pokemon$: Observable<Pokemon[]> = this.pokemonService.getPokemonList(this.limit, this.offset);

  onShowDetails(pokemon: Pokemon) {
    this.dialog.open(UiPokemonDialog, {
      width: '250px',
      data: pokemon
    });
  }

  onPage(event: PageEvent) {
    this.limit = event.pageSize;
    this.offset = event.pageSize * event.pageIndex;
    this.pokemon$ = this.pokemonService.getPokemonList(this.limit, this.offset);
  }
}
