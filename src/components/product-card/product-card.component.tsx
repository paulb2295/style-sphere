import './product-card.styles.scss'
import Button from "../button/button.component.tsx";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import {useContext} from "react";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";

const ProductCard = (product: IProduct) => {
    const {addItemToCart} = useContext(CartItemsContext)

    const {name, imageUrl, price} = product;

    const addProduct = () => {
        addItemToCart(product);
    }
    return (
        <div className="product-card-container">
            <img src={imageUrl}  alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType='inverted'
                    type='button'
                    children='Add to cart'
                    onClick={addProduct}
            />

        </div>
    );
}

export default ProductCard;
