import './category-preview.styles.tsx'
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import ProductCard from "../product-card/product-card.component.tsx";
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles.tsx";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading} from "../../store/products/product.selector.ts";
import Spinner from "../spinner/spinner.component.tsx";

const CategoryPreview = ({products, title}: { products: IProduct[]; title: string }) => {
    const isLoading = useSelector(selectCategoriesIsLoading);
    return (
        isLoading ? <Spinner/> :
            <CategoryPreviewContainer>
                <h2>
                    <Title to={title}>{title}</Title>
                </h2>
                <Preview>
                    {
                        products
                            .filter((_, idx) => idx < 4)
                            .map((item) =>
                                <ProductCard
                                    key={item.id}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    name={item.name}
                                    price={item.price}
                                />
                            )
                    }
                </Preview>
            </CategoryPreviewContainer>
    );
}

export default CategoryPreview;
