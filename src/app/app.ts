import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, RouterOutlet, Header],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('ng-ecommerce');
}
