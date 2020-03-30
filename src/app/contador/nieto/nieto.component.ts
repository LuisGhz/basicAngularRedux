import { Component } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ResetCounter } from '../counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent {

  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  reset() {
    const action = new ResetCounter();

    this.store.dispatch(action);
  }

}
