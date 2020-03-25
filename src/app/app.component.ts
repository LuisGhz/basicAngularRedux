import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, IncrementarContador, DecrementarContador } from './contador/contador.actions';

interface AppState {
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  incrementar() {
    // ++this.contador;

    const action = new IncrementarContador();

    this.store.dispatch(action);

  }

  decrementar() {
    // --this.contador;

    const action = new DecrementarContador();

    this.store.dispatch(action);
  }
}
