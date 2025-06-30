import { Component } from '@angular/core';
import { PageCoreLayout } from './shared/page-core-layout';

@Component({
  selector: 'app-root',
  imports: [PageCoreLayout],
  template: `<app-page-core-layout />`,
  styles: []
})
export class App {}
