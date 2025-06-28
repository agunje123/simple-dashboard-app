import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-ui-header',
  imports: [MatMenuModule, MatIconModule, MatButtonModule, MatTooltipModule, MatSlideToggleModule],
  template: `
    <nav class="app-card h-16 flex justify-between">
      <section class="card-title ml-4">{{ title }}</section>
      <section class="flex items-center gap-2 mr-4">
        @if (isMobile()) {
          <button matIconButton [matMenuTriggerFor]="menu" class="mb-1">
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button
              class="flex items-center p-4 justify-center w-full"
              (click)="$event.stopPropagation()"
            >
              <span class="card-text mr-2">Pero Perić</span>
              <mat-icon> account_circle </mat-icon>
            </button>
            <button class="flex items-center p-4 w-full" (click)="$event.stopPropagation()">
              <span class="card-text mr-2">Kontrast</span>
              <mat-slide-toggle [checked]="isDark" (change)="toggleTheme($event.checked)">
              </mat-slide-toggle>
            </button>
          </mat-menu>
        } @else {
          <span class="card-text">Kontrast</span>
          <mat-slide-toggle [checked]="isDark" (change)="toggleTheme($event.checked)">
          </mat-slide-toggle>
          <span class="card-text">Pero Perić</span>
          <mat-icon> account_circle </mat-icon>
        }
      </section>
    </nav>
  `,
  styles: ``
})
export class UiHeader implements OnInit {
  @Input() title?: string;
  isDark = false;
  isMobile = signal(false);

  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit() {
    const stored = localStorage.getItem('theme');
    this.isDark = stored === 'dark';
    document.body.classList.toggle('dark', this.isDark);

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => this.isMobile.set(result.matches));
  }

  toggleTheme(isDark: boolean) {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.isDark = isDark;
    document.body.classList.toggle('dark', isDark);
  }
}
