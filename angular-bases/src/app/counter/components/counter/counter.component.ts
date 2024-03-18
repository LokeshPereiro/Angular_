// @Component({
//   selector: 'app-counter',
//   template: '<h1>Counter Component</h1>',
// })
// export class CounterComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{ counter }}</h2>

    <button (click)="increaseBy()">+1</button>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="argCounter(5)">ArgNum</button>
    <button (click)="resetCounter()">Reset</button>
  `,
  // templateUrl: 'name.component.html'
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(): void {
    this.counter += 1;
  }
  decreaseBy(): void {
    this.counter -= 1;
  }
  argCounter(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 10;
  }
}
