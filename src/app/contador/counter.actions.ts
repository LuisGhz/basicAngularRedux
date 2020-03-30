import { Action } from '@ngrx/store';

export const INCREMENT = '[counter] Increment';
export const DECREMENT = '[counter] Decrement';
export const MULTIPLY = '[counter] Multiply';
export const DIVIDE = '[counter] Divide';

export class IncrementCounter implements Action {
    readonly type = INCREMENT;
}

export class DecrementCounter implements Action {
    readonly type = DECREMENT;
}

export class MultiplyCounter implements Action {
    readonly type = MULTIPLY;

    constructor(public payload: number) { }
}

export class DivideCounter implements Action {
    readonly type = DIVIDE;

    constructor(public payload: number) { }
}

// Valid Actions
export type Actions = IncrementCounter | DecrementCounter | MultiplyCounter | DivideCounter;