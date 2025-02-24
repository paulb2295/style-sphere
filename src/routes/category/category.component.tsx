import './category.styles.tsx'
import {useParams} from "react-router";
import ProductCard from "../../components/product-card/product-card.component.tsx";
import {CategoryContainer, CategoryTitle} from "./category.styles.tsx";
import {useSelector} from "react-redux";

import {selectProductsByCategory} from "../../store/products/product.selector.ts";

const Category = () => {
    const {category} = useParams();
    const products = useSelector((state) => selectProductsByCategory(state, category));

    return (
        <>
            <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products.map(product => (
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
