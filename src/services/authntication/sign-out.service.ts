import axios from "axios";
import {BASE_URL} from "../../utils/constants/constants-file.ts";
import {Dispatch, SetStateAction} from "react";
import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";

const signOutService = async (setCurrentUser: Dispatch<SetStateAction<ICurrentUser>>, currentUser: ICurrentUser) => {

    await axios.post(`${BASE_URL}/api/auth/logout`, {}, {
        headers: {
            Authorization: `Bearer ${currentUser.access_token}`,
            Accept: "application/json",
        },
        withCredentials: true
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
            console.log(error)
        })

}



export default signOutService;

