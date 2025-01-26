import {createContext, ReactNode, useEffect, useRef, useState} from "react";
import {IUserContextType} from "../utils/interfaces/user/IUserContextType.ts";
import {ICurrentUser} from "../utils/interfaces/user/ICurrentUser.ts";
import refreshAccessToken from "../services/authntication/refresh-token.service.ts";

export const UserContext = createContext<IUserContextType>(
    {
        currentUser: {
            id: -1,
            firstname: '',
            lastname: '',
            email: '',
            role: '',
            access_token: ''
        },
        setCurrentUser: () => null,
    }
);

export const UserProvider = ({children}: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<ICurrentUser>({
        id: -1,
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        access_token: ''
    });
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

    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}
