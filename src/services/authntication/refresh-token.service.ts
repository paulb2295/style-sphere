import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {jwtDecode} from "jwt-decode";
import {Dispatch, SetStateAction} from "react";
import {axiosInstance} from "../axios/axiosInstance.ts";

const refreshAccessToken = async (setCurrentUser: Dispatch<SetStateAction<ICurrentUser>> ) => {

    try {
        const response =
            await axiosInstance.post("/api/auth/refresh-token");
        if (response.status === 201 || response.status === 200) {
            const newAccessToken: string = response.data.access_token;
            const decodedToken: ICurrentUser = jwtDecode(newAccessToken);
            setCurrentUser({
                id: decodedToken.id,
                firstname: decodedToken.firstname,
                lastname: decodedToken.lastname,
                email: decodedToken.email,
                role: decodedToken.role,
                access_token: newAccessToken,
            });
        }
    } catch (error) {
        //console.error("Error refreshing token", error);
        setCurrentUser({id: -1,
            firstname: '',
            lastname: '',
            email: '',
            role: '',
            access_token: ''});
    }

};

export default refreshAccessToken;
