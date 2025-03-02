import {Outlet} from "react-router";
import {Fragment} from "react";
import CrownLogo from "../../assets/crown.svg";
import {NavigationContainer, NavLinks, LogoContainer, NavLink, Anchor} from "./navigation.styles.tsx"
import CartIcon from "../../components/cart-icon/cart-icon.component.tsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {selectCurrentUser} from "../../store/user/user.selector.ts";
import {setCartItems} from "../../store/cart/cart.action.ts";
import {selectIsCartOpen} from "../../store/cart/cart.selector.ts";
import {signOutStart} from "../../store/user/user.action.ts";

const Navigation = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
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
                    {currentUser ?
                        <Anchor onClick={
                            () => {
                                dispatch(signOutStart(currentUser))
                                dispatch(setCartItems([]));
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
