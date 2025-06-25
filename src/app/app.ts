import { Component } from '@angular/core';
import { UiLayout } from './shared/ui-layout';

@Component({
  selector: 'app-root',
  imports: [UiLayout],
  template: `<app-ui-layout />`,
  styles: []
})
export class App {}
