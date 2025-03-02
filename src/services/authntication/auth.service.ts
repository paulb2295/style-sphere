import {IUserSignInRequest} from "../../utils/interfaces/user/IUserSignInRequest.ts";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {axiosInstance} from "../axios/axiosInstance.ts";
import {jwtDecode} from "jwt-decode";
import {IUserSignUpRequest} from "../../utils/interfaces/user/IUserSignUpRequest.ts";


export const signInFunc = async (signInRequest: IUserSignInRequest): Promise<ICurrentUser> => {

    const res = await axiosInstance.post(`/api/auth/authenticate`, signInRequest)
    const decodedToken: ICurrentUser = jwtDecode(res.data.access_token);
    const currentUser: ICurrentUser = {
        id: decodedToken.id,
        firstname: decodedToken.firstname,
        lastname: decodedToken.lastname,
        email: decodedToken.email,
        role: decodedToken.role,
        access_token: res.data.access_token
    }
    return currentUser;
}

export const signUpFunc = async (signUpRequest: IUserSignUpRequest): Promise<ICurrentUser> => {
    const response = await axiosInstance.post(`/api/auth/register`, signUpRequest);

    const decodedToken: ICurrentUser = jwtDecode(response.data.access_token);
    const currentUser: ICurrentUser = {
        id: decodedToken.id,
        firstname: decodedToken.firstname,
        lastname: decodedToken.lastname,
        email: decodedToken.email,
        role: decodedToken.role,
        access_token: response.data.access_token
    }
    return currentUser;
}

export const signOutFunc = async (signOutRequest: ICurrentUser | null): Promise<null> => {
    if (signOutRequest) {
        await axiosInstance.post("/api/auth/logout", {}, {
            headers: {
                Authorization: `Bearer ${signOutRequest.access_token}`,
            },
        })
        return null;
    } else {
        throw new Error("No User Authenticated!");
    }
}

export const refreshTokenFunc = async (): Promise<ICurrentUser> => {

    const response = await axiosInstance.post("/api/auth/refresh-token");
    if (response.status === 201 || response.status === 200) {
        const newAccessToken: string = response.data.access_token;
        const decodedToken: ICurrentUser = jwtDecode(newAccessToken);
        const currentUser: ICurrentUser = {
            id: decodedToken.id,
            firstname: decodedToken.firstname,
            lastname: decodedToken.lastname,
            email: decodedToken.email,
            role: decodedToken.role,
            access_token: newAccessToken,
        }
        return currentUser;
    } else {
        throw new Error("Token couldn't be refreshed!")
    }
}
