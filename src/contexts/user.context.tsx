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
        setCurrentUser:() => null,
    }
);

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//     const [currentUser, setCurrentUser] = useState<ICurrentUser>({
//         id: -1,
//         firstname: '',
//         lastname: '',
//         email: '',
//         role: '',
//         access_token: ''
//     });
//     const value = {currentUser, setCurrentUser};
//     return <UserContext.Provider value={value}>
//         {children}
//     </UserContext.Provider>
// }

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<ICurrentUser>({id: -1, firstname: '', lastname: '', email: '', role: '', access_token: ''});
    const pageHasBeenRendered = useRef<boolean>(false);

    // const refreshAccessToken = async () => {
    //
    //     const api = axios.create({
    //         baseURL: `${BASE_URL}`,
    //         withCredentials: true,
    //     });
    //     try {
    //         const response = await api.post("/api/auth/refresh-token");
    //         if (response.status === 201 || response.status === 200) {
    //             const newAccessToken: string = response.data.access_token;
    //             const decodedToken: ICurrentUser = jwtDecode(newAccessToken);
    //             setCurrentUser({
    //                 id: decodedToken.id,
    //                 firstname: decodedToken.firstname,
    //                 lastname: decodedToken.lastname,
    //                 email: decodedToken.email,
    //                 role: decodedToken.role,
    //                 access_token: newAccessToken,
    //             });
    //         }
    //     } catch (error) {
    //         //console.error("Error refreshing token", error);
    //         setCurrentUser({id: -1,
    //             firstname: '',
    //             lastname: '',
    //             email: '',
    //             role: '',
    //             access_token: ''});
    //     }
    //
    // };

    useEffect(() => {
        if(pageHasBeenRendered.current){
            refreshAccessToken(setCurrentUser);
        }
        pageHasBeenRendered.current = true;
        const refreshTokenInterval = setInterval(() => {
            refreshAccessToken(setCurrentUser);
        }, 45 * 60 * 1000); // Refresh token every 45 minutes

        return () => clearInterval(refreshTokenInterval); // Cleanup interval on unmount
    }, []);

    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}
