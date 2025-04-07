import { all } from "redux-saga/effects";
import { watchTasksSaga } from "./task.saga";

export default function* rootSaga() {
    yield all([watchTasksSaga()]);
}