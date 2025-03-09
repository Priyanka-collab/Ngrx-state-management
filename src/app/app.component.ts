import { Component } from '@angular/core';
import { CounterComponent } from '../app/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  template: `<app-counter></app-counter>`,
})
export class AppComponent {}
