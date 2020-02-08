import { combineReducers } from "redux";
import exerciseSessionReducer from "./exerciseSession/index";

const rootReducer = combineReducers({
    exercise: exerciseSessionReducer
});

export default rootReducer;