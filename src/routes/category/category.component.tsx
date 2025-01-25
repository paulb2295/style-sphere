import './category.styles.tsx'
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../contexts/products.context.tsx";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import ProductCard from "../../components/product-card/product-card.component.tsx";
import {CategoryContainer, CategoryTitle} from "./category.styles.tsx";

const Category = () => {
    const {category} = useParams();
    const {fetchProductsByCategory, products} = useContext(ProductsContext)
    const [localProducts, setLocalProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetchProductsByCategory(category!);
    }, [category, fetchProductsByCategory]);

    useEffect(() => {
        setLocalProducts(products);
    }, [products]);

    return (
        <>
            <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {localProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.price}
                    />
                ))}
            </CategoryContainer>
        </>
    );
}

export default Category
