import {Middleware, UnknownAction} from "redux";
import {RootState} from "../store/root-reducer.ts";


export const loggerMiddleware : Middleware<object, RootState> = (store) => (next) => (action) => {
    const {type, payload} = action as UnknownAction;
    if(!type){
        return next(action);
    }
    console.log('type: ', type);
    console.log('payload: ', payload);
    console.log('currentState: ', store.getState());

    next(action);
    console.log('nextState: ', store.getState());
}
