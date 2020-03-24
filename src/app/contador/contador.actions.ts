import { Action } from '@ngrx/store';

export const INCREMENTAR = '[contador] Incrementar';
export const DECREMENTAR = '[contador] Decrementar';

export class IncrementarContador implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarContador implements Action {
    readonly type = DECREMENTAR;
}