import {compose, createStore, applyMiddleware, Middleware} from 'redux'
import logger from 'redux-logger';
import {rootReducer, RootState} from "./root-reducer.ts";
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistConfig} from "redux-persist/es/types";
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from "./root-saga.ts";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter(
    (middleware): middleware is Middleware => Boolean(middleware) //or just Boolean
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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
