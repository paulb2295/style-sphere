import {IProduct} from "./IProduct.ts";
import {Dispatch, SetStateAction} from "react";

interface IProductsContextType {
    products: IProduct[];
    allProducts: IProduct[];
    setProducts: Dispatch<SetStateAction<IProduct[]>>
    fetchProductsByCategory: (s: string) => void;
}

export type { IProductsContextType };
