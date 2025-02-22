import {createContext, ReactNode, useEffect, useReducer, useRef} from "react";
import {IUserContextType} from "../utils/interfaces/user/IUserContextType.ts";
import {ICurrentUser} from "../utils/interfaces/user/ICurrentUser.ts";
import refreshAccessToken from "../services/authntication/refresh-token.service.ts";
import {UserState} from "../utils/interfaces/reducers/user/UserState.ts";
import {UserAction} from "../utils/interfaces/reducers/user/SetCurrentUserAction.ts";

export const UserContext = createContext<IUserContextType>(
    {
        currentUser: null,
        setCurrentUser: () => {},
    }
);

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state: UserState, action: UserAction) => {
    const {type, payload} = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE: UserState = {
    currentUser: null,
};

export const UserProvider = ({children}: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const {currentUser} = state;

    const setCurrentUser = (user: ICurrentUser | null) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

    const pageHasBeenRendered = useRef<boolean>(false);

    useEffect(() => {
        if (pageHasBeenRendered.current) {
            refreshAccessToken(setCurrentUser);
        }
        pageHasBeenRendered.current = true;

        const refreshTokenInterval = setInterval(() => {
            refreshAccessToken(setCurrentUser);
        }, 55 * 60 * 1000); // Refresh token every 55 minutes

        return () => clearInterval(refreshTokenInterval);
    }, []);

    const value = {
        currentUser,
        setCurrentUser
    };
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}
