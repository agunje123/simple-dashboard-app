import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-component-navbar',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, RouterLink],
  template: `
    <div
      class="app-card flex flex-row gap-1 items-center justify-center h-16 md:flex-col md:h-full md:w-16"
    >
      @for (item of navItems; track item) {
        <button
          matIconButton
          [routerLink]="item.link"
          [matTooltip]="item.label"
          matTooltipPosition="right"
        >
          <mat-icon>{{ item.icon }}</mat-icon>
        </button>
      }
    </div>
  `,
  styles: ``
})
export class ComponentNavbar {
  navItems = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      link: '/dashboard'
    },
    {
      icon: 'table_chart',
      label: 'Tablica',
      link: '/table'
    }
  ];
}
