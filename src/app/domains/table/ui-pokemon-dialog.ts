import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pokemon } from './data-pokemon-model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-ui-pokemon-dialog',
  template: `<div class="app-card-light">
    <span class="card-title">{{ data.name | titlecase }}</span>
    <img [src]="data.sprites.front_default" alt="{{ data.name }}" class="w-full h-full" />
    <ul class="list-none">
      @for (stat of data.stats; track stat) {
        <li class="flex justify-between">
          <span class="card-text">{{ statNameMap[stat.stat.name] }}</span>
          <span class="card-text">{{ stat.base_stat }}</span>
        </li>
      }
    </ul>
  </div>`,
  styles: [``],
  imports: [TitleCasePipe]
})
export class UiPokemonDialog {
  dialogRef = inject(MatDialogRef<UiPokemonDialog>);
  data = inject<Pokemon>(MAT_DIALOG_DATA);

  statNameMap: Record<string, string> = {
    hp: 'Životni bodovi',
    attack: 'Napad',
    defense: 'Obrana',
    'special-attack': 'Poseban napad',
    'special-defense': 'Posebna obrana',
    speed: 'Brzina'
  };
}
