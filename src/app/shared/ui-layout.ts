import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UiNavbar } from './ui-navbar';
import { UiHeader } from './ui-header';
import { filter } from 'rxjs';

@Component({
  selector: 'app-ui-layout',
  imports: [RouterOutlet, MatIconModule, MatButtonModule, UiNavbar, UiHeader],
  template: `
    <div
      class="app-background h-screen w-screen grid grid-cols-1 grid-rows-[1fr_auto] 
            md:grid-rows-none md:grid-cols-[auto_1fr] p-2"
    >
      <div class="grid grid-rows-[auto_1fr] md:ml-2">
        <app-ui-header class="mb-2" [title]="headerTitle()" />
        <div class="app-card overflow-auto">
          <router-outlet />
        </div>
      </div>
      <app-ui-navbar class="mt-2 md:mt-0 row-start-3 md:col-start-1 md:row-start-1" />
    </div>
  `,
  styles: ``
})
export class UiLayout {
  private router = inject(Router);
  private currentUrl = signal(this.router.url);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
  }

  headerTitle = computed(() => {
    const url = this.currentUrl();
    if (url.includes('/table')) return 'Tablica';
    return 'Dashboard';
  });
}
