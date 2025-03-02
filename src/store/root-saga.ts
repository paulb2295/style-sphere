import {all, call} from "redux-saga/effects";
import {productsSaga} from "./products/products.saga.ts";
import {userSagas} from "./user/user.saga.ts";

export function* rootSaga() {
    yield all([
        call(productsSaga),
        call(userSagas)
    ])
}
