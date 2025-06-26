import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UiNavbar } from './ui-navbar';
import { UiHeader } from './ui-header';

@Component({
  selector: 'app-ui-layout',
  imports: [RouterOutlet, MatIconModule, MatButtonModule, UiNavbar, UiHeader],
  template: `
    <div
      class="app-background h-screen w-screen grid
            grid-rows-[auto_1fr_auto] md:grid-rows-none
            grid-cols-1 md:grid-cols-[auto_1fr] p-2"
    >
      <div class="grid grid-rows-[auto_1fr] md:col-start-2 md:ml-2">
        <app-ui-header class="mb-2" />
        <div class="overflow-auto app-card">
          <router-outlet />
        </div>
      </div>
      <app-ui-navbar class="row-start-3 md:col-start-1 md:row-start-1" />
    </div>
  `,
  styles: ``
})
export class UiLayout {}
