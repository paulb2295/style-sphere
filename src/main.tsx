import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {UserProvider} from "./contexts/user.context.tsx";
import {ProductProvider} from "./contexts/products.context.tsx";
import {CartProvider} from "./contexts/cart.context.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CartProvider>
                    <ProductProvider>
                        <App/>
                    </ProductProvider>
                </CartProvider>
            </UserProvider>
        </BrowserRouter>
    </StrictMode>,
);
