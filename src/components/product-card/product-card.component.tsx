import './product-card.styles.tsx'
import Button from "../button/button.component.tsx";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import {Footer, Name, Price, ProductCardContainer} from "./product-card.styles.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {selectCartItems} from "../../store/cart/cart.selector.ts";
import {addItemToCart} from "../../store/cart/cart.action.ts";

const ProductCard = (product: IProduct) => {
    const dispatch = useDispatch<AppDispatch>();
    const cartItems = useSelector(selectCartItems);

    const {name, imageUrl, price} = product;

    const addProduct = () => {
        dispatch(addItemToCart(cartItems,product));
    }
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name}/>
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
