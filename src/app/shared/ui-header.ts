import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-ui-header',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule],
  template: `
    <nav class="app-card h-16 flex justify-between">
      <section class="card-title ml-4">{{ title }}</section>
      <section class="flex items-center gap-2 mr-4">
        <span class="card-text">Kontrast</span>
        <mat-slide-toggle [checked]="isDark" (change)="toggleTheme($event.checked)">
        </mat-slide-toggle>
        <span class="card-text">Pero Perić</span>
        <mat-icon> account_circle </mat-icon>
      </section>
    </nav>
  `,
  styles: ``
})
export class UiHeader implements OnInit {
  @Input() title?: string;
  isDark = false;

  ngOnInit() {
    const stored = localStorage.getItem('theme');
    this.isDark = stored === 'dark';
    document.body.classList.toggle('dark', this.isDark);
  }

  toggleTheme(isDark: boolean) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.isDark = isDark;
    document.body.classList.toggle('dark', isDark);
  }
}
