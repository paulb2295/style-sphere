import Home from "./routes/home/home.component.tsx";
import {Route, Routes} from "react-router";
import Navigation from "./routes/navigation/navigation.component.tsx";
import Authentication from "./routes/authentication/authentication.component.tsx";
import Shop from "./routes/shop/shop.component.tsx";
import Checkout from "./routes/checkout/checkout.component.tsx";


const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation/>} >
                <Route index element={<Home />}/>
                <Route path='/auth' element={<Authentication />} />
                <Route path='/shop' element={ <Shop />} />
                <Route path='/checkout' element={ <Checkout />} />
            </Route>
        </Routes>
    );
}

export default App


