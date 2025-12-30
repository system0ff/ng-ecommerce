import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, RouterOutlet, Header],
  template: `
    <app-header class="relative z-10" />
    <div class="h-[calc(100%-64px)] overflow-auto">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('ng-ecommerce');
}
