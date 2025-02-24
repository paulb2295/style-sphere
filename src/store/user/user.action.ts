import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";
import {USER_ACTION_TYPES} from "./user.types.ts";


export const setCurrentUserAction = (user: ICurrentUser | null) => {
    return {
        type: USER_ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    };
}
