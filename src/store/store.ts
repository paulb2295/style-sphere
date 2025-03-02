import {compose, createStore, applyMiddleware, Middleware} from 'redux'
import {thunk} from 'redux-thunk'
import logger from 'redux-logger';
import {rootReducer, RootState} from "./root-reducer.ts";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import {PersistConfig} from "redux-persist/es/types";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig : ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(
    (middleware) : middleware is Middleware => Boolean(middleware) //or just Boolean
);


const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&

        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
    persistedReducer,
    undefined,
    composeEnhancers
);

export type AppDispatch = typeof store.dispatch;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const persistor = persistStore(store);
