import { SIGNUP_URL, GET_METHOD, POST_METHOD } from "../Utils/Constants";
import { SIGNUP_USER_BEGIN, SIGNUP_USER_SUCCESS, SET_LOADING } from '../Redux/Actions';
import { put, call, takeLatest } from "redux-saga/effects";
import { saveToken, saveUser } from '../Utils/Functions';

/* Api */
import apiCall from "../Api";

export function* signup({ payload }) {
    try {

        yield put({ type: SET_LOADING, payload: true });

        const response = yield call(apiCall, SIGNUP_URL, POST_METHOD, payload);

        if (response.token) {
            saveToken(response.token);
            saveUser(payload);
            yield put({ type: SIGNUP_USER_SUCCESS });
        }

        yield put({ type: SET_LOADING, payload: false });


    } catch (error) {
        console.log(error)
    }
}


//Watchers
export default function* user() {
    yield takeLatest(SIGNUP_USER_BEGIN, signup);
}