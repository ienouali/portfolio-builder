import {USERS} from '../../constants/actionTypes';

const loadingUsers = (state = false, action) => {
    switch (action.type) {
        case USERS.LOAD:
            return true;
        case USERS.LOAD_SUCCESS:
            return false;
        case USERS.LOAD_FAIL:
            return false;
        default:
            return state;
    }
};

const usersReducer = (state = [], action) => {
    if (action.type === USERS.LOAD_SUCCESS) {
        return action.payload;
    }
    return state;
};


export {loadingUsers, usersReducer};
