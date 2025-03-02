import {takeLatest, all, call, put} from 'redux-saga/effects'
import {PRODUCTS_ACTIONS_TYPES} from "./product.types.ts";
import {getAllProducts} from "../../services/shop/shop.service.ts";
import {fetchProductsFailed, fetchProductsSuccess} from "./product.action.ts";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";


export function* fetchProductsAsync() {
    try {
        const productList: IProduct[] = yield call(getAllProducts);
        yield put(fetchProductsSuccess(productList));
    } catch (error) {
        yield put(fetchProductsFailed(error as Error));
    }
}

export function* onFetchProducts() {
    yield takeLatest(
        PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_START,
        fetchProductsAsync
    );
}

export function* productsSaga() {
    yield all([
        call(onFetchProducts)
    ])
}
