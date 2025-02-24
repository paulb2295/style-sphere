import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {jwtDecode} from "jwt-decode";
import {axiosInstance} from "../axios/axiosInstance.ts";
import {Dispatch} from "react";
import {UserAction} from "../../utils/interfaces/reducers/user/SetCurrentUserAction.ts";
import {setCurrentUserAction} from "../../store/user/user.action.ts";

const refreshAccessToken = async (
    dispatch: Dispatch<UserAction>
) => {

    try {
        const response =
            await axiosInstance.post("/api/auth/refresh-token");
        if (response.status === 201 || response.status === 200) {
            const newAccessToken: string = response.data.access_token;
            const decodedToken: ICurrentUser = jwtDecode(newAccessToken);
            dispatch(setCurrentUserAction({
                id: decodedToken.id,
                firstname: decodedToken.firstname,
                lastname: decodedToken.lastname,
                email: decodedToken.email,
                role: decodedToken.role,
                access_token: newAccessToken,
            }));
        }
    } catch (error) {
        alert("Error refreshing token" + error);
        dispatch(setCurrentUserAction(null));
    }

};

export default refreshAccessToken;
