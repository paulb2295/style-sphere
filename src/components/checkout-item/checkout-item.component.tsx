import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context.tsx";
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

const CheckoutItem = (cartItem: ICartItem) => {
    const {deleteItemFromCart, increaseDecreaseItemQuantity} = useContext(CartContext)
    const {name, imageUrl, price, quantity} = cartItem;

    const clearItemHandler = () => deleteItemFromCart(cartItem);
    const increaseHandler = () => increaseDecreaseItemQuantity(cartItem, true);
    const decreaseHandler = () => increaseDecreaseItemQuantity(cartItem, false);
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
