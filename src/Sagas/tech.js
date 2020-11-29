import { TECHS_URL, GET_METHOD, } from "../Utils/Constants";
import { GET_TECHS_BEGIN, GET_TECHS_SUCCESS, TECH_SET_LOADING } from '../Redux/Actions';
import { put, call, takeLatest } from "redux-saga/effects";

/* Api */
import apiCall from "../Api";

export function* getTechs() {
    try {

        yield put({ type: TECH_SET_LOADING, payload: true });

        const response = yield call(apiCall, TECHS_URL, GET_METHOD);

        if (response.length) yield put({ type: GET_TECHS_SUCCESS, payload: response });

        yield put({ type: TECH_SET_LOADING, payload: false });

    } catch (error) {
        console.log(error)
    }
}


//Watchers
export default function* tech() {
    yield takeLatest(GET_TECHS_BEGIN, getTechs);
}