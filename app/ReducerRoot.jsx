import { combineReducers } from 'redux';

import { accountReducer } from './areas/account/Reducer.jsx';

var reducers = combineReducers({
    account: accountReducer
});

export { reducers };