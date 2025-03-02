import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {USER_ACTION_TYPES} from "./user.types.ts";
import {Action, ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils.ts";
import {IUserSignInRequest} from "../../utils/interfaces/user/IUserSignInRequest.ts";
import {IUserSignUpRequest} from "../../utils/interfaces/user/IUserSignUpRequest.ts";

export type SignInStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_START, IUserSignInRequest>
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, ICurrentUser>
export type SignInFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILURE, Error>

export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, IUserSignUpRequest>
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, ICurrentUser>
export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILURE, Error>

export type SignOutStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_START, ICurrentUser>
export type SignOutSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_SUCCESS, ICurrentUser>
export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILURE, Error>

export type RefreshTokenStart = Action<USER_ACTION_TYPES.REFRESH_USER_START>
export type RefreshTokenSuccess = ActionWithPayload<USER_ACTION_TYPES.REFRESH_USER_SUCCESS, ICurrentUser>
export type RefreshTokenFailure = ActionWithPayload<USER_ACTION_TYPES.REFRESH_USER_FAILURE, Error>

// export const setCurrentUserAction = (user: ICurrentUser | null) => {
//     return {
//         type: USER_ACTION_TYPES.SET_CURRENT_USER,
//         payload: user
//     };
// }


export const signInStart = withMatcher((signInRequest: IUserSignInRequest) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_IN_START,
        signInRequest
    );
})

export const signInSuccess = withMatcher((user: ICurrentUser) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_IN_SUCCESS,
        user
    );
})

export const signInFailure = withMatcher((err: Error) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_IN_FAILURE,
        err
    );
});

export const signUpStart = withMatcher((signUpRequest: IUserSignUpRequest) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_UP_START,
        signUpRequest
    );
});

export const signUpSuccess = withMatcher((user: ICurrentUser) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_UP_SUCCESS,
        user
    );
})

export const signUpFailure = withMatcher((err: Error) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_UP_FAILURE,
        err
    );
});

export const signOutStart = withMatcher((user: ICurrentUser) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_OUT_START,
        user
    );
});

export const signOutSuccess = withMatcher((user: ICurrentUser | null) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
        user
    );
})

export const signOutFailure = withMatcher((err: Error) => {
    return createAction(
        USER_ACTION_TYPES.SIGN_OUT_FAILURE,
        err
    );
});

export const refreshTokenStart = withMatcher(() => {
    return createAction(
        USER_ACTION_TYPES.REFRESH_USER_START,
    );
});

export const refreshTokenSuccess = withMatcher((user: ICurrentUser) => {
    return createAction(
        USER_ACTION_TYPES.REFRESH_USER_SUCCESS,
        user
    );
})

export const refreshTokenFailure = withMatcher((err: Error) => {
    return createAction(
        USER_ACTION_TYPES.REFRESH_USER_FAILURE,
        err
    );
});
