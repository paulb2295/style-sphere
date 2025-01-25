import './category-preview.styles.scss'
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import ProductCard from "../product-card/product-card.component.tsx";

const CategoryPreview = ( { products, title }: { products: IProduct[]; title: string }) => {
    return (
        <div className='category-preview-container'>
            <h2>
            <span className='title'>{title}</span>
            </h2>
            <div className='preview'>
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
            </div>
        </div>
    );
}

export default CategoryPreview;
