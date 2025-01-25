import './category.styles.scss'
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../contexts/products.context.tsx";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import ProductCard from "../../components/product-card/product-card.component.tsx";

const Category = () => {
    const {category} = useParams();
    const {fetchProductsByCategory, products} = useContext(ProductsContext)
    const[localProducts, setLocalProducts] = useState<IProduct[]>([])

    useEffect(() => {
        fetchProductsByCategory(category!);
    }, [category, fetchProductsByCategory]);

    useEffect(() => {
        setLocalProducts(products);
    }, [products]);

    return(
        <div className="category-page-container">
            {localProducts.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default Category
