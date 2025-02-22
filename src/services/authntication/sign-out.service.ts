import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {axiosInstance} from "../axios/axiosInstance.ts";


const signOutService = async (setCurrentUser: (user: ICurrentUser | null) => void, currentUser: ICurrentUser | null) => {

    if (currentUser) {
        await axiosInstance.post("/api/auth/logout", {}, {
            headers: {
                Authorization: `Bearer ${currentUser.access_token}`,
            },
        })
            .then(() => setCurrentUser(null))
            .catch((error: Error) => {
                alert(error)
            });
    }
}

export default signOutService;

