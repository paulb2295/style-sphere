import {Outlet, Link} from "react-router";
import {Fragment, useContext} from "react";
import CrownLogo from "../../assets/crown.svg";
import "./navigation.styles.scss"
import {UserContext} from "../../contexts/user.context.tsx";
import signOutService from "../../services/authntication/sign-out.service.ts";


const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <img src={CrownLogo} alt='logo' className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {currentUser.access_token === '' ?
                        <Link className='nav-link' to='/auth'>
                            SIGN IN
                        </Link> :
                        <a className='nav-link' onClick={
                            async () => {await signOutService(setCurrentUser, currentUser)}
                        }>
                            SIGN OUT
                        </a>
                    }
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
}

export default Navigation;
