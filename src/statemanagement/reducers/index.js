import { combineReducers } from "redux";
import exerciseSessionReducer from "./exerciseSession/index";
import signUpReducer from "./signUp/index";

const rootReducer = combineReducers({
    exercise: exerciseSessionReducer,
    signUp: signUpReducer
});

export default rootReducer;