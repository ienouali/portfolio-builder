import {USERS} from "../../constants/actionTypes";

const loadUsers= () => ({
    type: USERS.LOAD
});

const setUsers = users => ({
    type: USERS.LOAD_SUCCESS,
    payload: users
});

export {loadUsers, setUsers}
