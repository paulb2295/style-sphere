import {ICurrentUser} from "../../utils/interfaces/user/ICurrentUser.ts";

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
}as const;

type UserActionTypes = keyof typeof USER_ACTION_TYPES;

interface UserAction<T extends UserActionTypes, P>{
    type: typeof USER_ACTION_TYPES[T];
    payload: P;
}

export type UserActions = | UserAction<"SET_CURRENT_USER", ICurrentUser | null>
