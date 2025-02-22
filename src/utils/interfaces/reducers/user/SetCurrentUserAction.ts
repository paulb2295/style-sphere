import {ICurrentUser} from "../../user/ICurrentUser.ts";
import {USER_ACTION_TYPES} from "../../../../contexts/user.context.tsx";

interface SetCurrentUserAction {
    type: typeof USER_ACTION_TYPES.SET_CURRENT_USER;
    payload: ICurrentUser | null;
}

type UserAction = SetCurrentUserAction;

export type {UserAction};


