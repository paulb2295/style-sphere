import {axiosInstance} from "../axios/axiosInstance.ts";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";

const getAllProducts = async (): Promise<IProduct[]> => {

    try {
        const res = await axiosInstance.get("/api/storeItems/all");
        return res.data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
};


const getProductsByCategory = async (category: string): Promise<IProduct[]> => {
    try {
        const res = await axiosInstance.get(`/api/storeItems/categories?category=${category.toUpperCase()}`);
        return res.data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        return [];
    }
}

export { getAllProducts, getProductsByCategory };
