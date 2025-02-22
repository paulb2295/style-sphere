import {createContext, ReactNode, useEffect, useReducer} from "react";
import {IProductsContextType} from "../utils/interfaces/shop/IProductsContextType.ts";
import {IProduct} from "../utils/interfaces/shop/IProduct.ts";
import {getAllProducts, getProductsByCategory} from "../services/store/store.service.ts";
import {ProductsState} from "../utils/interfaces/reducers/product/ProductsState.ts";
import {PRODUCTS_ACTIONS_TYPES, ProductsActions} from "../utils/interfaces/reducers/product/ProductsActions.ts";

export const ProductsContext = createContext<IProductsContextType>(
    {
        products: [],
        allProducts: [],
        setProducts: () => null,
        fetchProductsByCategory: () => null,
    }
);

const INITIAL_STATE: ProductsState = {
    products: [],
    allProducts: [],
};

const productsReducer = (state: ProductsState, action: ProductsActions) => {
    const {type, payload} = action;
    switch (type) {
        case PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS :
            return {
                ...state,
                allProducts: payload
            };
        case PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                products: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in productsReducer`);
    }
}

export const ProductProvider = ({children}: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(productsReducer, INITIAL_STATE);

    const products = state.products;
    const allProducts = state.allProducts;
    const setAllProducts = (products: IProduct[]) => {
        dispatch({type: PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS, payload: products});
    }
    const setProducts = (products: IProduct[]) => {
        dispatch({type: PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_BY_CATEGORY, payload: products})
    }

    const fetchProductsByCategory = async (category: string) => {
        const productList = await getProductsByCategory(category);
        setProducts(productList);
    };


    useEffect(() => {
        const fetchAllProducts = async () => {
            const productList = await getAllProducts();
            setAllProducts(productList);
        };
        fetchAllProducts();
    }, [])

    const value = {products, setProducts, fetchProductsByCategory, allProducts};

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>;
}
