import {combineReducers} from 'redux'
import {userReducer} from "./user/user-reducer.ts";
import {productsReducer} from "./products/product.reducer.ts";
import {cartReducer} from "./cart/cart.reducer.ts";

export const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>;
