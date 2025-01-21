import {useContext} from "react";
import {ProductsContext} from "../../contexts/products.context.tsx";
import ProductCard from "../product-card/product-card.component.tsx";
import "./shop.styles.scss"

const Shop = () => {
    const {products} = useContext(ProductsContext)
    return (
        <div className="products-container">
            {products.map(({id, name, imageUrl, price}) => (
                <ProductCard
                    key={id}
                    id={id}
                    name={name}
                    imageUrl={imageUrl}
                    price={price}/>
            ))}
        </div>
    );
}

export default Shop;
