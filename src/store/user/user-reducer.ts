import {UserState} from "./user.state.ts";
import {UserActions} from "./user.types.ts";
import {USER_ACTION_TYPES} from "./user.types.ts";


const INITIAL_STATE: UserState = {
    currentUser: null,
};

export const userReducer = (state: UserState = INITIAL_STATE, action: UserActions) => {
    const {type, payload} = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            return state;
    }
}

