import { all, fork } from "redux-saga/effects";
import { watchExerciseData } from "./exerciseSession/index";
import { watchSignUpData } from "./signUp/index";

export default function* rootSaga() {
    yield all([
        fork(watchExerciseData),
        fork(watchSignUpData)
    ])
}