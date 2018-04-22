export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';
export const INIT_UI = 'INIT_UI';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function incrementAsync() {
    return {
        type: INCREMENT_ASYNC
    };
}

export function decrementAsync() {
    return {
        type: DECREMENT_ASYNC
    };
}

export function initUi(data) {
    return {
        type: INIT_UI,
        data: data
    };
}
