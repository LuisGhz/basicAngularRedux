import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementCounter, DecrementCounter } from './contador/contador.actions';

// Interface that will be used to pass the counter
interface AppState {
  counter: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Create the variable counter
  counter: number;

  // Inyection dependency. Variable store as type Store and use the interface AppState
  constructor(private store: Store<AppState>) {
    // Select the property counter to assíng the value to the variable counter
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  increment() {
    // Create a const of the action
    const action = new IncrementCounter();
    // Pass and execute the action
    this.store.dispatch(action);
  }

  decrement() {
    // Create a const of the action
    const action = new DecrementCounter();
    // Pass and execute the action
    this.store.dispatch(action);
  }
}
