import './product-card.styles.tsx'
import Button from "../button/button.component.tsx";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import {useContext} from "react";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";
import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles.tsx";

const ProductCard = (product: IProduct) => {
    const {addItemToCart} = useContext(CartItemsContext)

    const {name, imageUrl, price} = product;

    const addProduct = () => {
        addItemToCart(product);
    }
    return (
        <ProductCardContainer>
            <img src={imageUrl}  alt={name} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType='inverted'
                    type='button'
                    children='Add to cart'
                    onClick={addProduct}
            />

        </ProductCardContainer>
    );
}

export default ProductCard;
