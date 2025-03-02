import './category.styles.tsx'
import {useParams} from "react-router";
import ProductCard from "../../components/product-card/product-card.component.tsx";
import {CategoryContainer, CategoryTitle} from "./category.styles.tsx";
import {useSelector} from "react-redux";

import {selectCategoriesIsLoading, selectProductsByCategory} from "../../store/products/product.selector.ts";
import Spinner from "../../components/spinner/spinner.component.tsx";

const Category = () => {
    const {category} = useParams();
    const isLoading = useSelector(selectCategoriesIsLoading);
    const products = useSelector((state) => selectProductsByCategory(state, category));

    return (
        <>
            <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
            {
                isLoading ? <Spinner/> :
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
            }
        </>
    );
}

export default Category
