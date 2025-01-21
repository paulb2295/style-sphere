import {IProduct} from "./IProduct.ts";
import {Dispatch, SetStateAction} from "react";

interface IProductsContextType {
    products: IProduct[];
    setProducts: Dispatch<SetStateAction<IProduct[]>>
}

export type { IProductsContextType };
