import {deleteItemFromCart, increaseDecreaseItemQuantity} from "../../store/cart/cart.action.ts";
import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";
import './checkout-item.styles.tsx'
import {
    Arrow,
    CheckoutItemContainer,
    ImageContainer,
    Name,
    Price,
    QuantityContainer, RemoveButton,
    Value
} from "./checkout-item.styles.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {selectCartItems} from "../../store/cart/cart.selector.ts";

const CheckoutItem = (cartItem: ICartItem) => {

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch<AppDispatch>();
    const {name, imageUrl, price, quantity} = cartItem;


    const clearItemHandler = () => dispatch( deleteItemFromCart(cartItems, cartItem));
    const increaseHandler = () => dispatch(increaseDecreaseItemQuantity(cartItems,cartItem, true));
    const decreaseHandler = () => dispatch(increaseDecreaseItemQuantity(cartItems, cartItem, false));
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name}/>
            </ImageContainer>
            <Name>{name}</Name>
            <QuantityContainer>
                <Arrow onClick={decreaseHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={increaseHandler}>&#10095;</Arrow>
            </QuantityContainer>
            <Price>{price}</Price>

            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
}

export default CheckoutItem;
