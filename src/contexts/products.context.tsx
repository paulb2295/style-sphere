import {createContext, ReactNode, useEffect, useState} from "react";
import {IProductsContextType} from "../utils/interfaces/shop/IProductsContextType.ts";
import {IProduct} from "../utils/interfaces/shop/IProduct.ts";
import SHOP_DATA from "../data/shop-data.json"

export const ProductsContext = createContext<IProductsContextType>(
    {
        products : [],
        setProducts : () => null
    }
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        setProducts(SHOP_DATA);
    }, [])

    const value = {products, setProducts};

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>;
}
