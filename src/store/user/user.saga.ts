import {all, call, put, takeLatest} from "redux-saga/effects";
import {refreshTokenFunc, signInFunc, signOutFunc, signUpFunc} from "../../services/authntication/auth.service.ts";
import {
    refreshTokenFailure,
    refreshTokenSuccess,
    signInFailure, SignInStart,
    signInSuccess,
    signOutFailure, SignOutStart,
    signOutSuccess,
    signUpFailure, SignUpStart,
    signUpSuccess
} from "./user.action.ts";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {USER_ACTION_TYPES} from "./user.types.ts";


export function* signInAsync({payload: signInRequest}: SignInStart) {
    try {
        const currentUser: ICurrentUser = yield call(
            signInFunc,
            signInRequest
        );
        console.log(currentUser.email);
        yield put(signInSuccess(currentUser));
    } catch (error) {
        yield put(signInFailure(error as Error));
    }
}

export function* signUpAsync({payload: signUpRequest}: SignUpStart) {
    try {
        const currentUser: ICurrentUser = yield call(
            signUpFunc,
            signUpRequest
        );
        yield put(signUpSuccess(currentUser));
    } catch (error) {
        yield put(signUpFailure(error as Error));
    }
}

export function* signOutAsync({payload: signOutRequest}: SignOutStart) {
    try {
        yield call(signOutFunc, signOutRequest);
        yield put(signOutSuccess(null));
    } catch (error) {
        yield put(signOutFailure(error as Error));
    }
}

export function* refreshTokenAsync() {
    try {
        const currentUser: ICurrentUser = yield call(refreshTokenFunc);
        yield put(refreshTokenSuccess(currentUser));
    } catch (error) {
        yield put(refreshTokenFailure(error as Error));
    }
}

export function* onSignUp() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_UP_START,
        signUpAsync
    );
}

export function* onSignIn() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_IN_START,
        signInAsync
    )
}

export function* onSignOut() {
    yield takeLatest(
        USER_ACTION_TYPES.SIGN_OUT_START,
        signOutAsync
    )
}

export function* onRefreshToken() {
    yield takeLatest(
        USER_ACTION_TYPES.REFRESH_USER_START,
        refreshTokenAsync
    )
}


export function* userSagas() {
    yield all([
        call(onSignUp),
        call(onSignIn),
        call(onSignOut),
        call(onRefreshToken),
    ]);
}
