export const SHOW = 'show';
export const SHOW_DATA = 'show_data';

export function show() {
    return {
        type: SHOW
    }
}

export function showData(data) {
    return {
        type: SHOW_DATA,
        data: data
    }
}
