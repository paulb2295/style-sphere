import Home from "./routes/home/home.component.tsx";
import {Route, Routes} from "react-router";
import Navigation from "./routes/navigation/navigation.component.tsx";
import Authentication from "./routes/authentication/authentication.component.tsx";
import Shop from "./routes/shop/shop.component.tsx";
import Checkout from "./routes/checkout/checkout.component.tsx";
import {useEffect, useRef} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/store.ts";
import {fetchProductsStart} from "./store/products/product.action.ts";
import {refreshTokenStart} from "./store/user/user.action.ts";


const App = () => {

    const dispatch = useDispatch<AppDispatch>();
    const pageHasBeenRendered = useRef<boolean>(false);

    useEffect(() => {
        if (pageHasBeenRendered.current) {
            dispatch(refreshTokenStart())
        }
        pageHasBeenRendered.current = true;

        const refreshTokenInterval = setInterval(() => {
            dispatch(refreshTokenStart())
        }, 55 * 60 * 1000); // Refresh token every 55 minutes

        return () => clearInterval(refreshTokenInterval);
    }, []);


    useEffect(() => {
        dispatch(fetchProductsStart());
    }, [dispatch])


    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/auth' element={<Authentication/>}/>
                <Route path='/shop/*' element={<Shop/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    );
}

export default App


