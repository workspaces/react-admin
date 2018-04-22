import * as actions from './actions';

const initState = {
    show: 'no'
};

function show(state = initState, action) {
    console.log('show:' + action.type);
    switch (action.type) {
        case actions.SHOW:
            return {...state,
                show: 'show'
            };
        case actions.SHOW_DATA:
            return {...state, show: 'show_data', data: action.data};
        default:
    }
    return state;
}

export { show };