import { Action } from '@ngrx/store';

export const INCREMENT = '[contador] Increment';
export const DECREMENT = '[contador] Decrement';

export class IncrementCounter implements Action {
    readonly type = INCREMENT;
}

export class DecrementCounter implements Action {
    readonly type = DECREMENT;
}