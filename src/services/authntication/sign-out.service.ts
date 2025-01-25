import {Dispatch, SetStateAction} from "react";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {axiosInstance} from "../axios/axiosInstance.ts";


const signOutService = async (setCurrentUser: Dispatch<SetStateAction<ICurrentUser>>, currentUser: ICurrentUser) => {

    await axiosInstance.post("/api/auth/logout", {}, {
        headers: {
            Authorization: `Bearer ${currentUser.access_token}`,
        },
    })
        .then(() => setCurrentUser({
            id: -1,
            firstname: '',
            lastname: '',
            email: '',
            role: '',
            access_token: ''
        }))
        .catch((error: Error) => {
            alert(error)
        });

}

export default signOutService;

