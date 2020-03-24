import { Action } from '@ngrx/store';

export function contadorReducer(state: number = 10, action: Action) {

    switch (action.type) {
        case 'INCREMENTAR':
            return ++state;
        case 'DECREMENTAR':
            return --state;


        default:
            return state;
    }
}