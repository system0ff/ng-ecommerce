import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButton } from '@angular/material/button'
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, MatButton, RouterOutlet],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('ng-ecommerce');
}
