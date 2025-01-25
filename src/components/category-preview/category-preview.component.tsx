import './category-preview.styles.tsx'
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import ProductCard from "../product-card/product-card.component.tsx";
import {CategoryPreviewContainer, Preview, Title} from "./category-preview.styles.tsx";

const CategoryPreview = ( { products, title }: { products: IProduct[]; title: string }) => {
    return (
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
