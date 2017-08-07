
import { loadUsersAsync } from './AccountServices.jsx';

const LIST_USERS = 'LISTUSERS';
const ListUsers = () => {
    return {
        type: LIST_USERS
    };
};

const LIST_REQUESTED = 'LISTREQUESTED';
const ListRequested = () => {
    return {
        type: LIST_REQUESTED
    };
};

const LIST_RECEIVED = "LISTRECEIVED";
const ListReceived = (result) => {
    return {
        type: LIST_RECEIVED,
        payload: result
    };
};

function listUsersAsync(){
    return function(dispatch){
        dispatch(ListRequested());

        return loadUsersAsync(function(result){
            console.log(result);
            dispatch(ListReceived(result));
        })
    }
}


export {
    LIST_USERS, ListUsers,
    LIST_REQUESTED, ListRequested,
    LIST_RECEIVED, ListReceived,
    listUsersAsync
}