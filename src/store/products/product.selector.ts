import {RootState} from "../root-reducer.ts";
import {createSelector} from "reselect";
import {ProductsState} from "./products.state.ts";

const selectProductsReducer = (state: RootState): ProductsState => state.products;

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

export const selectCategoriesIsLoading = createSelector(
    [selectProductsReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);



