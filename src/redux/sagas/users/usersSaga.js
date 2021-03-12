import {takeEvery,  call, put} from 'redux-saga/effects';
import {USERS} from "../../constants/actionTypes";
import {getUsers } from "../../../api/users/usersApi";
import {setUsers } from "../../actions/users/usersAction";



function* loadUsersSaga() {
    try {
        const users = yield call(getUsers);
        yield put(setUsers(users));
    }  catch (err) {
        yield put(setUsers(err.toString()));
    }
}

export default function* watchUsersSaga() {
    yield  takeEvery(USERS.LOAD, loadUsersSaga);
}
