/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = [], action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                USER_LOGIN:action.payload};
            break;
        case 'GETGP':
            return {
                ...state,
                GETGP:action.payload};
            break;
        case 'ALTER':
            return {
                ...state,
                ALTER:action.payload};
            break;
    }
    return state;
}