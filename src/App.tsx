import Home from "./routes/home/home.component.tsx";
import {Route, Routes} from "react-router";
import Navigation from "./routes/navigation/navigation.component.tsx";
import Authentication from "./routes/authentication/authentication.component.tsx";
import Shop from "./routes/shop/shop.component.tsx";
import Checkout from "./routes/checkout/checkout.component.tsx";
import {useEffect, useRef} from "react";
import refreshAccessToken from "./services/authntication/refresh-token.service.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store/store.ts";
import {fetchProductsAsync} from "./store/products/product.action.ts";


const App = () => {

    const dispatch = useDispatch<AppDispatch>();
    const pageHasBeenRendered = useRef<boolean>(false);

    useEffect(() => {
        if (pageHasBeenRendered.current) {
            refreshAccessToken(dispatch);
        }
        pageHasBeenRendered.current = true;

        const refreshTokenInterval = setInterval(() => {
            refreshAccessToken(dispatch);
        }, 55 * 60 * 1000); // Refresh token every 55 minutes

        return () => clearInterval(refreshTokenInterval);
    }, []);


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(fetchProductsAsync());
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


