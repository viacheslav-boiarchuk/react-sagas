import { fork, all } from 'redux-saga/effects';
import { watchOMDB } from './omdb';

export default function* rootSaga() {
    yield all([
        fork(watchOMDB)
    ]);
}