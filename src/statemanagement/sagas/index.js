import { all, fork } from "redux-saga/effects";
import { watchExerciseData } from "./exerciseSession/index";

export default function* rootSaga() {
    yield all([
        fork(watchExerciseData),
    ])
}