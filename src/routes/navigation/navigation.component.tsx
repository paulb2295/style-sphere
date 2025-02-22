import {Outlet} from "react-router";
import {Fragment, useContext} from "react";
import CrownLogo from "../../assets/crown.svg";
import {NavigationContainer, NavLinks, LogoContainer, NavLink, Anchor} from "./navigation.styles.tsx"
import {UserContext} from "../../contexts/user.context.tsx";
import signOutService from "../../services/authntication/sign-out.service.ts";
import CartIcon from "../../components/cart-icon/cart-icon.component.tsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.tsx";
import {CartContext} from "../../contexts/cart.context.tsx";

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    const {setCartItems} = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <img src={CrownLogo} alt='logo' className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {currentUser?
                        <Anchor onClick={
                            async () => {
                                await signOutService(setCurrentUser, currentUser);
                                setCartItems([]);
                            }
                        }>
                            SIGN OUT
                        </Anchor> :
                        <NavLink to='/auth'>
                            SIGN IN
                        </NavLink>
                    }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;
