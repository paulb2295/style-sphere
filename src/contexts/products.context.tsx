import {createContext, ReactNode, useEffect, useState} from "react";
import {IProductsContextType} from "../utils/interfaces/shop/IProductsContextType.ts";
import {IProduct} from "../utils/interfaces/shop/IProduct.ts";
import {getAllProducts, getProductsByCategory} from "../services/store/store.service.ts";

export const ProductsContext = createContext<IProductsContextType>(
    {
        products: [],
        allProducts: [],
        setProducts: () => null,
        fetchProductsByCategory: () => null,
    }
);

export const ProductProvider = ({children}: { children: ReactNode }) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [allProducts, setAllProducts] = useState<IProduct[]>([]);

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
