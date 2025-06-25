import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-ui-header',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  template: ` <div class="bg-gray-700 rounded-2xl h-16"></div> `,
  styles: ``
})
export class UiHeader {}
