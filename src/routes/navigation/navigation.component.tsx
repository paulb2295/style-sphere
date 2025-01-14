import {Outlet, Link} from "react-router";
import {Fragment} from "react";
import CrownLogo from "../../assets/crown.svg";
import "./navigation.styles.scss"


const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <img src={CrownLogo} alt='logo' className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>

                </div>
            </div>
            <Outlet/>

        </Fragment>
    );
}

export default Navigation;
