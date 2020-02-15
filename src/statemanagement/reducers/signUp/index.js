import { SignUp } from "../../utils/actions";

const initalState = {
    payload: {
        name: '', 
        age: 19, 
        gender: 'M', 
        weight: 70, 
        height: 6, 
        personalityData: [], 
        exerciseData: []
    },
    isLoading: true,
    error: false
}

const signUpReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case SignUp.SET_SIGNUP_DATA:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case SignUp.ON_SIGNUP_DATA_SUCCESS:
            return {
                ...state,
                payload: payload,
                isLoading: false,
                error: false
            }
        case SignUp.ON_SIGNUP_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true
            }
    
        default:
            return state;
    }
}

export default signUpReducer;