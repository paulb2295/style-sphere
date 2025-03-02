import {UserState} from "./user.state.ts";
import {UnknownAction} from "redux";
import {
    refreshTokenFailure,
    refreshTokenStart, refreshTokenSuccess,
    signInFailure, signInStart,
    signInSuccess,
    signOutFailure, signOutStart,
    signOutSuccess,
    signUpFailure, signUpStart,
    signUpSuccess
} from "./user.action.ts";


const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null
};

export const userReducer = (state: UserState = INITIAL_STATE, action: UnknownAction): UserState => {
    if (signInStart.match(action) ||
        signUpStart.match(action) ||
        signOutStart.match(action) ||
        refreshTokenStart.match(action)
    ) {
        return {
            ...state,
            isLoading: true,
        }
    }
    if (signInSuccess.match(action) ||
        signUpSuccess.match(action) ||
        signOutSuccess.match(action) ||
        refreshTokenSuccess.match(action)
    ) {
        return {
            ...state,
            currentUser: action.payload,
            isLoading: false,
            error: null
        }
    }
    if (signInFailure.match(action) ||
        signUpFailure.match(action) ||
        signOutFailure.match(action) ||
        refreshTokenFailure.match(action)
    ) {
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        }
    }
    return state;
}

