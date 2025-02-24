import {compose, createStore, applyMiddleware} from 'redux'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import logger from 'redux-logger';
import {rootReducer, RootState} from "./root-reducer.ts";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';



const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);


const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
