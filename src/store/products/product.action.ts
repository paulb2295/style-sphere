import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import {PRODUCTS_ACTIONS_TYPES, ProductsActions} from "./product.types.ts";

export const setAllProductsAction = (products: IProduct[]): ProductsActions => {
    return {
        type: PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS,
        payload: products
    }
}

