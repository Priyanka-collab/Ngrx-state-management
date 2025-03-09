import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter/counter.action';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  template: `
    <div class="counter-container">
      <mat-card class="counter-card">
        <h1>Counter: <span>{{ count() }}</span></h1>
        <div class="button-group">
          <button mat-raised-button color="primary" (click)="increment()">+</button>
          <button mat-raised-button color="warn" (click)="decrement()">-</button>
          <button mat-raised-button color="accent" (click)="reset()">Reset</button>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    .counter-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
    }
    .counter-card {
      text-align: center;
      padding: 30px;
      width: 300px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      background: white;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    span {
      font-weight: bold;
      color: #1976d2;
    }
    .button-group {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    }
    button {
      width: 60px;
      font-size: 18px;
    }
  `]
})
export class CounterComponent {
  count = signal(0);

  constructor(private store: Store<{ counter: number }>) {
    this.store.select('counter').subscribe(value => this.count.set(value));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
