import {RootState} from "../root-reducer.ts";
import {createSelector} from "reselect";

const selectProductsReducer = (state: RootState) => state.products;

export const selectAllProducts = createSelector(
    [selectProductsReducer],
    productsSlice => {
        return productsSlice.allProducts
    }
);

export const selectProductsByCategory = createSelector(
    [selectAllProducts, (_, category) => category],
    (productsSlice, category) => {
        return productsSlice.filter(
            product => product.category === category
        );
    }
);



