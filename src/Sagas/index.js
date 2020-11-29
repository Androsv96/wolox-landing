import { all } from 'redux-saga/effects';
import user from './user';
import tech from './tech';

export default function* rootSaga() {
    yield all([user(), tech()]);
}