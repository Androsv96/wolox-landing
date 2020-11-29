import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers";
import reduxSaga from "redux-saga";

const sagaMiddleware = reduxSaga();

export default function configureStore() {
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    };
}