import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {axiosInstance} from "../axios/axiosInstance.ts";
import {Dispatch} from "react";
import {UserAction} from "../../utils/interfaces/reducers/user/SetCurrentUserAction.ts";
import {setCurrentUserAction} from "../../store/user/user.action.ts";


const signOutService = async (currentUser: ICurrentUser | null, dispatch: Dispatch<UserAction>) => {

    if (currentUser) {
        await axiosInstance.post("/api/auth/logout", {}, {
            headers: {
                Authorization: `Bearer ${currentUser.access_token}`,
            },
        })
            .then(() => dispatch(setCurrentUserAction(null)))
            .catch((error: Error) => {
                alert(error)
            });
    }
}

export default signOutService;

