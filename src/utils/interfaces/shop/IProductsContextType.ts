import {IProduct} from "./IProduct.ts";


interface IProductsContextType {
    products: IProduct[];
    allProducts: IProduct[];
    setProducts: (products: IProduct[]) => void,
    fetchProductsByCategory: (s: string) => void;
}

export type {IProductsContextType};
