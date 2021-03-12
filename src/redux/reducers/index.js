import {combineReducers} from "redux";
import {loadingUsers,usersReducer} from "./users/usersReducer";

export default  combineReducers({
    isUsersLoaded: loadingUsers,
    users: usersReducer,

});
