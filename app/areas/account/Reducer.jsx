
import { LIST_USERS, LIST_REQUESTED, LIST_RECEIVED } from './Actions.jsx';

import { loadUsers } from './AccountServices.jsx';

var initialState = {
    users: [],
    isLoading: false
};

var accountReducer = function(state = initialState, action){
    switch(action.type){
        case LIST_USERS:
            return Object.assign({}, state, {
                users: loadUsers()
            });
        case LIST_REQUESTED:
            return Object.assign({}, state, {
                isLoading: true
            });
        case LIST_RECEIVED:
            return Object.assign({}, state, {
                users: action.payload,
                isLoading: false
            });
        default:
            return state;
    }
}

export { accountReducer }