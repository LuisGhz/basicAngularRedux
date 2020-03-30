import { Actions, INCREMENT, DECREMENT, MULTIPLY, DIVIDE } from './counter.actions';

export function counterReducer(state: number = 10, action: Actions) {

    switch (action.type) {
        case INCREMENT:
            return ++state;
        case DECREMENT:
            return --state;
        case MULTIPLY:
            return state * action.payload;
        case DIVIDE:
            return state / action.payload;

        default:
            return state;
    }
}