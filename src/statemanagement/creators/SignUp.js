import { SignUp } from "../utils/actions";

export const SignUpCreators = {
    setName: Name => ({
        type: SignUp.SET_USER_NAME,
        payload: {
            name: Name,
        }
    }),
    setAge: Age => ({
        type: SignUp.SET_USER_AGE,
        payload: {
            age: Age,
        }
    }),
    setGender: Gender => ({
        type: SignUp.SET_USER_GENDER,
        payload: {
            gender: Gender,
        }
    }),
    setWeight: Weight => ({
        type: SignUp.SET_USER_WEIGHT,
        payload: {
            weight: Weight,
        }
    }),
    setHeight: Height => ({
        type: SignUp.SET_USER_HEIGHT,
        payload: {
            height: Height,
        }
    }),
    setModelVisible: ModelVisible => ({
        type: SignUp.SET_USER_MODEL_VISIBLE,
        payload: {
            modelVisible: ModelVisible,
        }
    }),
    setPersonalityData: Personality => ({
        type: SignUp.SET_USER_PERSONALITY,
        payload: {
            personality: Personality,
        }
    }),
    setExerciseData: Exercise => ({
        type: SignUp.SET_USER_EXERCISE,
        payload: {
            exercise: Exercise,
        }
    }),
    setSignUpData: UserData => ({
        type: SignUp.SET_SIGNUP_DATA,
        payload: {
            name: UserData.name,
            age: UserData.age,
            gender: UserData.gender,
            weight: UserData.weight,
            height: UserData.height,
            personalityData: UserData.personalityData,
            exerciseData: UserData.exerciseData
        }
    }),
    onSignUpDataSuccess: data => ({
        type: SignUp.ON_SIGNUP_DATA_SUCCESS,
        payload: data
    }),
    onSignUpDataFail: error => ({
        type: SignUp.ON_SIGNUP_DATA_FAIL
    })
}