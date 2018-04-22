import { INCREMENT, DECREMENT, INIT_UI } from './actions';

// 初始化
const initState = {
    enthusiasmLevel: 1,
    languageName: 'ES6',
}; 

function enthusiasm(state = initState, action) {
    console.log('enthusiasm:' + action.type);
    switch (action.type) {
        case INCREMENT:
            return {...state,
                enthusiasmLevel: state.enthusiasmLevel + 1
            };
        case DECREMENT:
            return {...state,
                enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
            };
        case INIT_UI:
            return {...state, data: action.data};
        default:
    }
    return state;
}

export { enthusiasm };