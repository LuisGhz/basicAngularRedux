import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MultiplyCounter, DivideCounter } from '../counter.actions';
import { AppState } from '../../app.reducers';



@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent {

  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  multiply() {
    const action = new MultiplyCounter(5);

    this.store.dispatch(action);
  }

  divide() {
    const action = new DivideCounter(2);

    this.store.dispatch(action);
  }
}
